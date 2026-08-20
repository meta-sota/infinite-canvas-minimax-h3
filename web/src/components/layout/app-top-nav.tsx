import { Bot, LayoutDashboard, Menu } from "lucide-react";
import { Button, Tooltip } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { navigationTools, type NavigationToolSlug } from "@/constant/navigation-tools";
import { AppConfigModal } from "@/components/layout/app-config-modal";
import { MiniMaxApiKeyGuideModal } from "@/components/layout/minimax-api-key-guide-modal";
import { MobileNavDrawer } from "@/components/layout/mobile-nav-drawer";
import { UserStatusActions } from "@/components/layout/user-status-actions";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useAgentStore } from "@/stores/use-agent-store";

export function AppTopNav() {
    const { t } = useTranslation();
    const { pathname } = useLocation();
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const autoConnectRef = useRef(false);
    const agentToken = useAgentStore((state) => state.token);
    const agentEnabled = useAgentStore((state) => state.enabled);
    const agentConnected = useAgentStore((state) => state.connected);
    const connectAgent = useAgentStore((state) => state.connectAgent);
    const togglePanel = useAgentStore((state) => state.togglePanel);
    const panelOpen = useAgentStore((state) => state.panelOpen);
    const hideHeader = /^\/canvas\/[^/]+/.test(pathname);
    const slug = pathname.split("/").filter(Boolean)[0];
    const activeToolSlug = navigationTools.some((tool) => tool.slug === slug) ? (slug as NavigationToolSlug) : undefined;

    useEffect(() => {
        if (autoConnectRef.current || agentEnabled || agentConnected || !agentToken.trim()) return;
        autoConnectRef.current = true;
        connectAgent({ silent: true });
    }, [agentConnected, agentEnabled, agentToken, connectAgent]);

    return (
        <>
            {!hideHeader ? (
                <header className="relative sticky top-0 z-20 h-14 shrink-0 border-b border-stone-200 bg-background/90 backdrop-blur-xl dark:border-stone-800">
                    <Link to="/" className="absolute inset-y-0 left-0 flex w-12 items-center justify-center text-black transition hover:opacity-70 dark:text-white" aria-label="秘塔">
                        <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[19px] w-[30px] shrink-0" role="img" aria-label="秘塔">
                            <path d="M9.8457 8.77388C10.2388 8.09886 11.2116 8.09886 11.6047 8.77388L16.4212 17.0886C17.1002 18.2599 18.6845 18.5776 19.7725 17.6683C20.6143 16.9655 20.7413 15.7107 20.1894 14.7617L12.6292 1.74573" fill="currentColor" />
                            <path d="M28.725 14.8688L24.0753 6.84C23.4638 5.77982 22.1058 5.41848 21.0496 6.03394C19.9894 6.64543 19.6281 8.00341 20.2435 9.05962L24.8932 17.0884C25.5047 18.1486 26.8627 18.5099 27.9189 17.8945C28.9791 17.283 29.3365 15.929 28.725 14.8688Z" fill="currentColor" />
                            <path d="M21.1271 1.74563C20.5156 0.685455 19.1577 0.324121 18.1015 0.939581C17.0452 1.55504 16.6799 2.90905 17.2954 3.96526C17.9069 5.02544 19.2649 5.38678 20.3211 4.77132C21.3773 4.15586 21.7386 2.80581 21.1271 1.74563Z" fill="currentColor" />
                            <path d="M11.8217 0.93949C11.7502 0.899783 11.6827 0.864046 11.6072 0.83228C10.6503 0.407414 9.51468 0.713159 8.90716 1.57083C8.90319 1.57877 8.89922 1.58274 8.89525 1.59069C8.87936 1.61054 8.86348 1.63436 8.85157 1.65819C8.83172 1.68995 8.81186 1.71775 8.79598 1.74951L1.2556 14.7615C1.10471 15.0196 1.00942 15.2976 0.957797 15.5835C0.957797 15.5914 0.953826 15.5994 0.953826 15.6073C0.953826 15.6152 0.949856 15.6232 0.949856 15.6351C0.933973 15.7463 0.922061 15.8575 0.922061 15.9726C0.91412 16.6159 1.1603 17.2432 1.67253 17.6721C2.09342 18.0215 2.58579 18.1922 3.07021 18.2002C3.0861 18.2002 3.09801 18.2002 3.11389 18.2002C3.12581 18.2002 3.14169 18.2002 3.1536 18.2002C3.91201 18.1922 4.64659 17.7991 5.05557 17.0963L9.91969 8.66649L12.6277 3.97311C13.2432 2.90896 12.8818 1.55098 11.8217 0.93949Z" fill="currentColor" />
                        </svg>
                    </Link>
                    <div className="mx-auto flex h-full max-w-7xl items-stretch justify-between gap-5 pl-14 pr-6">
                        <div className="flex min-w-0 items-center">
                            <Link to="/" className="flex h-full shrink-0 items-center gap-2 text-sm font-semibold leading-none tracking-tight text-stone-950 transition hover:text-stone-600 dark:text-stone-100 dark:hover:text-stone-300">
                                <span
                                    className="size-5 shrink-0 bg-current"
                                    style={{
                                        mask: "url(/logo.svg) center / contain no-repeat",
                                        WebkitMask: "url(/logo.svg) center / contain no-repeat",
                                    }}
                                    role="img"
                                    aria-label="infinite-canvas"
                                />
                                <span className="text-base font-medium">{t("meta.title")}</span>
                            </Link>

                            <button
                                type="button"
                                className="ml-3 inline-flex size-8 shrink-0 items-center justify-center text-stone-600 transition hover:text-stone-950 md:hidden dark:text-stone-300 dark:hover:text-white"
                                onClick={() => setMobileNavOpen(true)}
                                aria-label={t("topNav.openMenu")}
                                title={t("topNav.menu")}
                            >
                                <Menu className="size-5" />
                            </button>

                            <nav className="hide-scrollbar ml-8 hidden h-14 min-w-0 items-center gap-7 overflow-x-auto md:flex">
                                {navigationTools.map((tool) => {
                                    const Icon = tool.icon;
                                    const active = tool.slug === activeToolSlug;
                                    return (
                                        <Link
                                            key={tool.slug}
                                            to={`/${tool.slug}`}
                                            className={cn(
                                                "relative flex h-14 shrink-0 items-center gap-2 text-sm leading-6 transition after:absolute after:inset-x-0 after:bottom-0 after:h-px",
                                                active
                                                    ? "font-medium text-stone-950 after:bg-stone-950 dark:text-stone-100 dark:after:bg-stone-100"
                                                    : "text-stone-500 after:bg-transparent hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-100",
                                            )}
                                        >
                                            <Icon className="size-4" />
                                            <span className="truncate">{t(`navigation.${tool.slug}`)}</span>
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>

                        <div className="my-auto flex h-9 min-w-0 items-center justify-end gap-2 justify-self-end whitespace-nowrap">
                            <Tooltip title="控制台">
                                <a href="https://metaso.cn/minimax-h3-console" target="_blank" rel="noopener noreferrer" className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-stone-600 transition-colors hover:bg-black/5 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-white/10 dark:hover:text-white" aria-label="控制台">
                                    <LayoutDashboard className="size-4" />
                                </a>
                            </Tooltip>
                            <Tooltip title={t(panelOpen ? "topNav.closeAgent" : "topNav.openAgent")}>
                                <Button type="text" shape="circle" className="!h-8 !w-8 !min-w-8" icon={<Bot className="size-4" />} onClick={togglePanel} aria-label={t(panelOpen ? "topNav.closeAgent" : "topNav.openAgent")} />
                            </Tooltip>
                            <UserStatusActions />
                        </div>
                    </div>
                </header>
            ) : null}

            <MobileNavDrawer open={mobileNavOpen} activeToolSlug={activeToolSlug} onClose={() => setMobileNavOpen(false)} />
            <AppConfigModal />
            <MiniMaxApiKeyGuideModal />
        </>
    );
}

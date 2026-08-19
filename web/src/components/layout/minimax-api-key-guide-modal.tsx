import { Button, Modal } from "antd";
import { ExternalLink, KeyRound } from "lucide-react";
import { useEffect, useState } from "react";

const GUIDE_SEEN_KEY = "infinite-canvas:minimax-api-key-guide-seen";
const MINIMAX_H3_URL = "https://metaso.cn/minimax-h3";

const pricingRows = [
    ["2K 视频输出", "0.15 元/秒"],
    ["768P 视频输出", "0.09 元/秒"],
    ["音频输入", "免费"],
    ["图片输入", "前 5 张免费，超出 0.05 元/张"],
    ["参考视频输入", "按输出分辨率计费：0.15 / 0.09 元/秒"],
    ["H3 Context IR", "0.05 元/次"],
] as const;

export function MiniMaxApiKeyGuideModal() {
    const [open, setOpen] = useState(false);
    const [remaining, setRemaining] = useState(3);

    useEffect(() => {
        try {
            if (window.localStorage.getItem(GUIDE_SEEN_KEY) !== "1") setOpen(true);
        } catch {
            setOpen(true);
        }
    }, []);

    useEffect(() => {
        if (!open || remaining <= 0) return undefined;
        const timer = window.setTimeout(() => setRemaining((value) => Math.max(0, value - 1)), 1000);
        return () => window.clearTimeout(timer);
    }, [open, remaining]);

    const close = () => {
        if (remaining > 0) return;
        setOpen(false);
        try {
            window.localStorage.setItem(GUIDE_SEEN_KEY, "1");
        } catch {
            // The dialog can still be dismissed when storage is unavailable.
        }
    };

    return (
        <Modal open={open} centered width={620} title="开始使用 MiniMax H3" footer={null} closable={false} maskClosable={false} keyboard={false}>
            <div className="space-y-5 pt-2">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/70 dark:bg-amber-950/30">
                    <div className="flex items-start gap-3">
                        <KeyRound className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
                        <div className="min-w-0 space-y-1.5">
                            <div className="font-semibold text-stone-950 dark:text-stone-100">请先获取 API Key</div>
                            <p className="text-sm leading-6 text-stone-600 dark:text-stone-300">登录 Metaso 后，点击「控制台」进入「请求管理」，创建并复制 API Key，再回到本项目的配置中填写。</p>
                            <Button type="primary" size="small" href={MINIMAX_H3_URL} target="_blank" rel="noreferrer" icon={<ExternalLink className="size-3.5" />}>
                                打开 MiniMax H3 页面
                            </Button>
                        </div>
                    </div>
                    <ol className="mt-3 space-y-1 pl-8 text-xs leading-5 text-stone-600 dark:text-stone-400">
                        <li>登录 Metaso 账号。</li>
                        <li>点击「控制台」，进入「请求管理」。</li>
                        <li>创建并复制 API Key，粘贴到本项目的 MiniMax H3 渠道。</li>
                    </ol>
                </div>

                <div>
                    <div className="mb-2 flex items-baseline justify-between gap-3">
                        <h3 className="text-sm font-semibold text-stone-950 dark:text-stone-100">视频定价</h3>
                        <span className="text-xs text-stone-500 dark:text-stone-400">按生成时长与素材计费</span>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800">
                        {pricingRows.map(([label, price], index) => (
                            <div key={label} className={`grid grid-cols-[1fr_auto] gap-4 px-3 py-2.5 text-sm ${index ? "border-t border-stone-200 dark:border-stone-800" : ""}`}>
                                <span className="text-stone-600 dark:text-stone-300">{label}</span>
                                <span className="text-right font-medium text-stone-950 dark:text-stone-100">{price}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-2 text-xs leading-5 text-stone-500 dark:text-stone-400">积分换算基准：4399 元 = 500000 积分；最终计费以 MiniMax 控制台为准。</p>
                </div>

                <div className="flex justify-end">
                    <Button type="primary" disabled={remaining > 0} onClick={close}>
                        {remaining > 0 ? `我知道了（${remaining}）` : "我知道了"}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

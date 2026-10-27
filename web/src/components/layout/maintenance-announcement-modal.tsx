import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { ArrowUpRight, Bot, Cloud, Sparkles } from "lucide-react";

import "./maintenance-announcement-modal.css";

const metasoTvUrl = "https://tv.metaso.cn";

const highlights = [
    {
        icon: Cloud,
        title: "跨浏览器同步资源",
        description: "项目、画布、素材与创作记录统一保存，换浏览器也能接着做。",
    },
    {
        icon: Sparkles,
        title: "更完整的 AI 创作链路",
        description: "自由画布串起提示词、参考素材、图片、视频、音频、分镜与时间线。",
    },
    {
        icon: Bot,
        title: "让 Agent 真正参与创作",
        description: "理解画布上下文，连接素材、修改节点、推进生成与分镜工作。",
    },
];

export function MaintenanceAnnouncementModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    return (
        <Modal
            open={open}
            centered
            width={720}
            footer={null}
            closable
            maskClosable={false}
            destroyOnHidden
            className="maintenance-announcement-modal"
            styles={{ mask: { backgroundColor: "rgba(15, 14, 12, 0.72)", backdropFilter: "blur(10px)" } }}
            onCancel={() => setOpen(false)}
            aria-label="工作台迁移通知"
        >
            <div className="maintenance-announcement">
                <section className="maintenance-announcement__hero">
                    <div className="maintenance-announcement__orb maintenance-announcement__orb--large" aria-hidden="true" />
                    <div className="maintenance-announcement__orb maintenance-announcement__orb--small" aria-hidden="true" />

                    <div className="maintenance-announcement__brand">
                        <span className="maintenance-announcement__brand-mark" role="img" aria-label="Metaso" />
                        <span>METASO TV</span>
                        <span className="maintenance-announcement__brand-line" aria-hidden="true" />
                        <span className="maintenance-announcement__eyebrow">工作台迁移通知</span>
                    </div>

                    <div className="maintenance-announcement__hero-copy">
                        <span className="maintenance-announcement__status">当前版本已停止维护</span>
                        <h2 id="maintenance-announcement-title">你的创作，不必停在这里。</h2>
                        <p>
                            欢迎前往全新的 Metaso TV 创作空间。更稳定的云端工作区、更完整的创作工具，以及真正能参与创作的 Agent，都在这里继续展开。
                        </p>
                    </div>

                    <div className="maintenance-announcement__destination" aria-label="新工作台网址">
                        <span>前往新工作台</span>
                        <strong>tv.metaso.cn</strong>
                        <ArrowUpRight aria-hidden="true" />
                    </div>
                </section>

                <section className="maintenance-announcement__body">
                    <div className="maintenance-announcement__intro">
                        <span className="maintenance-announcement__intro-kicker">NEXT CREATIVE WORKSPACE</span>
                        <p>把灵感、素材和模型放在同一个可以持续生长的工作流里。</p>
                    </div>

                    <div className="maintenance-announcement__highlights">
                        {highlights.map(({ icon: Icon, title, description }) => (
                            <article key={title} className="maintenance-announcement__highlight">
                                <span className="maintenance-announcement__highlight-icon" aria-hidden="true">
                                    <Icon />
                                </span>
                                <div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="maintenance-announcement__footer">
                        <p>当前页面仍可继续使用，但将不再获得新的功能更新。</p>
                        <div className="maintenance-announcement__actions">
                            <Button type="text" onClick={() => setOpen(false)}>
                                继续使用当前版本
                            </Button>
                            <Button type="primary" size="large" href={metasoTvUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} icon={<ArrowUpRight size={17} />}>
                                进入 Metaso TV
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </Modal>
    );
}

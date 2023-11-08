import { CSSProperties } from "react";
import { IMG_URL } from "./Constans";
import { Card, Space } from "antd";

export function SkillComponent({ names }: { names: string[] }) {
    const cardStyle: CSSProperties = {
        alignItems: "center",
        display: "flex",
        width: 100,
        height: 100,
    };
    const imgStyle: CSSProperties = {
        padding: 3,
        top: "50%",
        position: "relative",
    };

    return (
        <Space
            style={{
                backgroundColor: "#e7e6e6",
                padding: 10,
            }}
        >
            {names.map((name: string) => (
                <Card
                    hoverable
                    style={cardStyle}
                    bodyStyle={{ display: "none" }}
                    cover={<img src={`${IMG_URL}/${name}`} style={imgStyle} />}
                />
            ))}
        </Space>
    );
}

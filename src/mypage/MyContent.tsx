import { Card, Col, Divider, Flex, Row, Space, Typography } from "antd";
import { CSSProperties } from "react";
import aws from "../image/aws.png";
import css from "../image/css.png";
import github from "../image/github.png";
import html from "../image/html.png";
import java from "../image/java.png";
import js from "../image/js.png";
import nestjs from "../image/nestjs.svg";
import nodejs from "../image/nodejs.png";
import oracle from "../image/oracle.png";
import react from "../image/react.png";
import redux2 from "../image/redux.svg";
import springBoot from "../image/spring boot.png";
import spring from "../image/spring.png";
import ts from "../image/ts.png";
import { Questor } from "./Questor";
import { BoardHub } from "./BoardHub";
import docker from "../image/docker.png";

const { Title, Text, Paragraph } = Typography;

export function MyContent() {
    const cardStyle = {
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
        <>
            <Row style={{ textAlign: "center", width: "100%" }}>
                <Col span={24}>
                    <Divider style={{ border: "black" }}>
                        <Title>I AM</Title>
                    </Divider>
                    <Space
                        direction="vertical"
                        align="start"
                        style={{ maxWidth: "50%" }}
                    >
                        <Title level={3}>포기하지 않는 사람</Title>
                        <Paragraph style={{ fontSize: 18 }}>
                            저는 어떠한 어려움과 역경을 마주하더라도 끈질기게
                            노력하고 계속해서 새로운 기회를 찾고,
                        </Paragraph>
                        <Paragraph style={{ fontSize: 18 }}>
                            불운한 상황에서도 긍정적인 태도를 유지하며 어떻게
                            문제를 해결할 수 있는지 고민하고 극복하려 합니다.
                        </Paragraph>
                        <Paragraph style={{ fontSize: 18 }}>
                            또한, 취미생활에도 좋은 효율 내기 위해 항상 여러가지
                            정보를 찾아보고 시도해보면서 정답을 찾아가는 성향을
                            가지고 있습니다.
                        </Paragraph>
                        <Paragraph style={{ fontSize: 18 }}>
                            이는 개발을 하면서도 상당히 많은 도움이 되었습니다.
                        </Paragraph>
                    </Space>
                </Col>
                <Col span={24}>
                    <Divider style={{ border: "black" }}>
                        <Title>Skill</Title>
                    </Divider>
                    <div>
                        <Space direction="vertical">
                            <Space
                                style={{
                                    backgroundColor: "#e7e6e6",
                                    padding: 10,
                                }}
                            >
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={<img src={java} style={imgStyle} />}
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={<img src={css} style={imgStyle} />}
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={<img src={html} style={imgStyle} />}
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={<img src={js} style={imgStyle} />}
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={<img src={ts} style={imgStyle} />}
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img src={oracle} style={imgStyle} />
                                    }
                                />
                            </Space>
                            <Space
                                style={{
                                    backgroundColor: "#e7e6e6",
                                    padding: 10,
                                }}
                            >
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img src={nodejs} style={imgStyle} />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img src={nestjs} style={imgStyle} />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img src={spring} style={imgStyle} />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img
                                            src={springBoot}
                                            style={imgStyle}
                                        />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={<img src={react} style={imgStyle} />}
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img src={redux2} style={imgStyle} />
                                    }
                                />
                            </Space>
                            <Space
                                style={{
                                    backgroundColor: "#e7e6e6",
                                    padding: 10,
                                }}
                            >
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={<img src={aws} style={imgStyle} />}
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img src={github} style={imgStyle} />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img src={docker} style={imgStyle} />
                                    }
                                />
                            </Space>
                        </Space>
                    </div>
                </Col>
                <Col span={24}>
                    <Divider style={{ border: "black" }}>
                        <Title>Project</Title>
                    </Divider>
                    <Questor />
                    <BoardHub />
                </Col>
            </Row>
        </>
    );
}

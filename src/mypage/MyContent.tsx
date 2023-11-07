import { Card, Col, Divider, Row, Space, Typography } from "antd";
import { CSSProperties } from "react";
import { BoardHub } from "./BoardHub";
import { Questor } from "./Questor";
import { IMG_URL } from "./Constans";

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
                                    cover={
                                        <img
                                            src={`${IMG_URL}/java.png`}
                                            style={imgStyle}
                                        />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img
                                            src={`${IMG_URL}/css.png`}
                                            style={imgStyle}
                                        />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img
                                            src={`${IMG_URL}/html.png`}
                                            style={imgStyle}
                                        />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img
                                            src={`${IMG_URL}/js.png`}
                                            style={imgStyle}
                                        />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img
                                            src={`${IMG_URL}/ts.png`}
                                            style={imgStyle}
                                        />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img
                                            src={`${IMG_URL}/oracle.png`}
                                            style={imgStyle}
                                        />
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
                                        <img
                                            src={`${IMG_URL}/nodejs.png`}
                                            style={imgStyle}
                                        />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img
                                            src={`${IMG_URL}/nestjs.svg`}
                                            style={imgStyle}
                                        />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img
                                            src={`${IMG_URL}/spring.png`}
                                            style={imgStyle}
                                        />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img
                                            src={`${IMG_URL}/spring-boot.png`}
                                            style={imgStyle}
                                        />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img
                                            src={`${IMG_URL}/react.png`}
                                            style={imgStyle}
                                        />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img
                                            src={`${IMG_URL}/redux.svg`}
                                            style={imgStyle}
                                        />
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
                                        <img
                                            src={`${IMG_URL}/aws.png`}
                                            style={imgStyle}
                                        />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img
                                            src={`${IMG_URL}/github.png`}
                                            style={imgStyle}
                                        />
                                    }
                                />
                                <Card
                                    hoverable
                                    style={cardStyle}
                                    bodyStyle={{ display: "none" }}
                                    cover={
                                        <img
                                            src={`${IMG_URL}/docker.png`}
                                            style={imgStyle}
                                        />
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

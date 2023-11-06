import { Avatar, Card, Flex, Image, Row, Space, Typography, Col } from "antd";
import github from "../image/github.png";
import nestjs from "../image/nestjs.svg";
import questor from "../image/questor.png";
import react from "../image/react.png";
import redux2 from "../image/redux.svg";
import ts from "../image/ts.png";
import dynamodb from "../image/aws_dynamodb.png";
import ec2 from "../image/aws_ec2.png";

const { Title, Text, Paragraph } = Typography;

export function Questor() {
    return (
        <div style={{ marginBottom: 20 }}>
            <Flex justify="center">
                <Card
                    title={<Title>QUESTOR</Title>}
                    bordered={false}
                    style={{ width: "50%", maxWidth: 1000 }}
                    cover={
                        <div>
                            <Flex
                                justify="space-evenly"
                                style={{ marginTop: 10 }}
                            >
                                <Image
                                    src={questor}
                                    preview={false}
                                    style={{
                                        padding: 3,
                                        marginRight: 10,
                                        maxWidth: 500,
                                    }}
                                />
                                <Flex align="center">
                                    <div>
                                        <Paragraph
                                            strong
                                            style={{ fontSize: 24 }}
                                        >
                                            개인 프로젝트
                                        </Paragraph>
                                        <Paragraph style={{ fontSize: 20 }}>
                                            React, Redux, NestJS 개인 공부
                                        </Paragraph>
                                        <Paragraph style={{ fontSize: 20 }}>
                                            퀘스트 공유를 통해 관심을 높이고
                                        </Paragraph>
                                        <Paragraph style={{ fontSize: 20 }}>
                                            퀘스트 완료시 보상을 지급해 동기부여
                                        </Paragraph>
                                        <Paragraph style={{ fontSize: 20 }}>
                                            지루함 감소
                                        </Paragraph>
                                    </div>
                                </Flex>
                            </Flex>
                        </div>
                    }
                >
                    <Flex justify="space-between">
                        <Space
                            style={{
                                backgroundColor: "#e7e6e6",
                                padding: 3,
                            }}
                        >
                            <Image src={ts} preview={false} width={50} />
                            <Image src={react} preview={false} width={50} />
                            <Image src={redux2} preview={false} width={50} />
                            <Image src={nestjs} preview={false} width={50} />
                            <Image src={dynamodb} preview={false} width={50} />
                            <Image src={ec2} preview={false} width={50} />
                        </Space>
                        <Space>
                            <a href="http://3.39.23.102:8080/login">
                                <Avatar
                                    size={50}
                                    style={{
                                        backgroundColor: "black",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Q
                                </Avatar>
                            </a>
                            <a href="https://github.com/sariys333/questor">
                                <Image
                                    src={github}
                                    preview={false}
                                    width={50}
                                />
                            </a>
                        </Space>
                    </Flex>
                </Card>
            </Flex>
        </div>
    );
}

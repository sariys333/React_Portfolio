import { Avatar, Card, Divider, Flex, Image, Space, Typography } from "antd";
import ec2 from "../image/aws_ec2.png";
import docker from "../image/docker.png";
import gamelist from "../image/gamelist.gif";
import github from "../image/github.png";
import java from "../image/java.png";
import nodejs from "../image/nodejs.png";
import oracle from "../image/oracle2.png";
import react from "../image/react.png";
import springBoot from "../image/spring boot.png";

const { Title, Text, Paragraph } = Typography;

export function BoardHub() {
    return (
        <div style={{ marginBottom: 20 }}>
            <Flex justify="center">
                <Card
                    title={<Title>Board Hub</Title>}
                    bordered={false}
                    style={{ width: "50%", maxWidth: 1000 }}
                    cover={
                        <div>
                            <Flex
                                justify="space-evenly"
                                style={{ marginTop: 10 }}
                            >
                                <Image
                                    src={gamelist}
                                    preview={false}
                                    style={{
                                        padding: 3,
                                        maxWidth: 500,
                                        marginRight: 10,
                                    }}
                                />
                                <Flex align="center">
                                    <div>
                                        <Paragraph
                                            strong
                                            style={{ fontSize: 24 }}
                                        >
                                            3인 팀 프로젝트
                                        </Paragraph>
                                        <Paragraph style={{ fontSize: 20 }}>
                                            개발기간 약 2주
                                        </Paragraph>
                                        <Divider
                                            style={{
                                                border: "black",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            역할
                                        </Divider>
                                        <Paragraph style={{ fontSize: 20 }}>
                                            쓰레드를 활용한 OPEN API 수집
                                        </Paragraph>
                                        <Paragraph style={{ fontSize: 20 }}>
                                            게임 관련 기능 구현
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
                            <Image src={java} preview={false} width={50} />
                            <Image
                                src={springBoot}
                                preview={false}
                                width={50}
                            />
                            <Image src={oracle} preview={false} width={50} />
                            <Image src={nodejs} preview={false} width={50} />
                            <Image src={react} preview={false} width={50} />
                            <Image src={ec2} preview={false} width={50} />
                            <Image src={docker} preview={false} width={50} />
                        </Space>
                        <Space>
                            <a>
                                <Avatar
                                    size={50}
                                    style={{
                                        backgroundColor: "black",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                >
                                    B
                                </Avatar>
                            </a>
                            <a href="https://github.com/CodeName4885/BoardHub">
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

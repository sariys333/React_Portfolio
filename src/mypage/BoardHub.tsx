import { Avatar, Card, Divider, Flex, Image, Space, Typography } from "antd";
import { IMG_URL } from "./Constans";

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
                                    src={`${IMG_URL}/gamelist.gif`}
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
                            <Image
                                src={`${IMG_URL}/java.png`}
                                preview={false}
                                width={50}
                            />
                            <Image
                                src={`${IMG_URL}/spring-boot.png`}
                                preview={false}
                                width={50}
                            />
                            <Image
                                src={`${IMG_URL}/oracle.png`}
                                preview={false}
                                width={50}
                            />
                            <Image
                                src={`${IMG_URL}/nodejs.png`}
                                preview={false}
                                width={50}
                            />
                            <Image
                                src={`${IMG_URL}/react.png`}
                                preview={false}
                                width={50}
                            />
                            <Image
                                src={`${IMG_URL}/aws_ec2.png`}
                                preview={false}
                                width={50}
                            />
                            <Image
                                src={`${IMG_URL}/docker.png`}
                                preview={false}
                                width={50}
                            />
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
                                    src={`${IMG_URL}/github.png`}
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

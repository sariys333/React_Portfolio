import { Divider, Flex, Layout, Typography, message } from "antd";
import CopyToClipboard from "react-copy-to-clipboard";
import { MyContent } from "./MyContent";

const { Content, Footer, Header } = Layout;
const { Title } = Typography;

export function MyPage() {
    const email = "sariys33@naver.com";

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: "success",
            content: "클립보드에 복사되었습니다.",
        });
    };

    return (
        <>
            <Layout>
                <Header style={{ height: 100 }}>
                    <Flex justify="center" align="center">
                        <Title style={{ color: "white" }}>
                            신입 개발자. 홍지윤
                        </Title>
                    </Flex>
                </Header>
                <Content>
                    <MyContent />
                </Content>
                <Footer
                    style={{ textAlign: "center", backgroundColor: "#2c2c2c" }}
                >
                    {contextHolder}
                    <Divider style={{ border: "white" }}>
                        <Title style={{ color: "white" }}>Contact</Title>
                    </Divider>
                    <Title style={{ color: "white" }}>
                        Created by Jiyun Hong
                    </Title>

                    <Title style={{ color: "white" }}>
                        Email
                        <Divider type="vertical" />
                        <CopyToClipboard text={email} onCopy={success}>
                            <a>{email}</a>
                        </CopyToClipboard>
                    </Title>
                </Footer>
            </Layout>
        </>
    );
}

import { Divider, Layout, Space, Typography, message } from "antd";
import { MyContent } from "./MyContent";
import CopyToClipboard from "react-copy-to-clipboard";

const { Content, Footer, Header } = Layout;
const { Title } = Typography;

export function MyPage() {
    const email = "sariys33@naver.com";

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: "success",
            content: "클립보드에 복사되었습니다.",
            style: {
                // marginTop: "50vh",
            },
        });
    };

    return (
        <>
            <Layout>
                <Header></Header>
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
                        {" "}
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

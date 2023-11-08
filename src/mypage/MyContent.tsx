import { Col, Divider, Row, Space, Typography } from "antd";
import { BoardHub } from "./BoardHub";
import { Questor } from "./Questor";
import { SkillComponent } from "./SkillComponent";

const { Title, Paragraph } = Typography;

export function MyContent() {
    const firstRow: string[] = [
        "java.png",
        "css.png",
        "html.png",
        "js.png",
        "ts.png",
        "oracle.png",
    ];

    const secondRow: string[] = [
        "nodejs.png",
        "nestjs.svg",
        "spring.png",
        "spring-boot.png",
        "react.png",
        "redux.svg",
    ];

    const thirdRow: string[] = ["aws.png", "github.png", "docker.png"];

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
                            <SkillComponent names={firstRow} />
                            <SkillComponent names={secondRow} />
                            <SkillComponent names={thirdRow} />
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

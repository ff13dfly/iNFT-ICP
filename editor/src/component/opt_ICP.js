import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

function ICP(props) {
    const size = {
        row: [12],
    };

    const self={
        clickWrite:(ev)=>{
        },
        clickRun:(ev)=>{
        },
    };

    useEffect(() => {
    }, [props.update]);

    return (
        <Row className="pt-2">
            <Col className="text-center" lg={size.row[0]} xl={size.row[0]} xxl={size.row[0]} >
                Deploy the template definition on ICP.
            </Col>
            <Col className="text-center pt-2" lg={size.row[0]} xl={size.row[0]} xxl={size.row[0]} >
                <button className="btn btn-md btn-primary" onClick={(ev)=>{
                    self.clickWrite(ev);
                }}>Deploy on ICP Mainnet</button>
            </Col>
        </Row>
    )
}

export default ICP;
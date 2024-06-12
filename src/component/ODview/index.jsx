import React, { useEffect, useState, useCallback } from 'react'
import { Col, Card,  Tooltip } from 'antd';
import {
    InfoCircleOutlined, InboxOutlined
} from '@ant-design/icons';

export default function ODview() {


    return (
        <>
            <Col span={24}>
                <Card title="Data" extra={<Tooltip title='Import OD data to show flow map'><InfoCircleOutlined /></Tooltip>}
                    bordered={false}>
                </Card>
            </Col>


        </>
    )

}
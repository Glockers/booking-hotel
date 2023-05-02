import React, {useEffect, useState} from 'react';
import './style.css'
import {axiosPublic} from "utils/axios";
import {IServices} from "common/dto";
import {Layout, Row} from "antd";
import {ServiceCard} from "components/Card/service";

const ServiceCatalogPage: React.FC = () => {
    const [services, setServices] = useState<IServices[]>([] as IServices[]);
    useEffect(() => {
        axiosPublic.get<IServices[]>("/api/service/getAll").then(result => {
            setServices(result.data)
        }).catch((error) => console.log(error))
    }, [])

    return (
        <Layout>
            <section className="catalog">
                <Row gutter={[100, 40]} style={{ padding: "30px", borderRadius: "30px" }} wrap>
                    {services.map(element => {
                        return <ServiceCard {...element} key={element.id}/>
                    })}
                </Row>
            </section>
        </Layout>
    )
}

export default ServiceCatalogPage;
import { Col, Row } from 'antd';
import { CardItem } from '../card';

export function CardsList({ goods }) {
  return (
    <Row gutter={[24, { xs: 12, sm: 16, md: 24, lg: 32 }]} justify="start">
      {goods.map((item) => (
        <Col key={item.id} span={6} xs={24} sm={12} lg={8} xl={6} xxl={4}>
          <CardItem
            id={item?.id}
            title={item?.title}
            image={item?.image}
            price={item?.price}
          />
        </Col>
      ))}
    </Row>
  );
}
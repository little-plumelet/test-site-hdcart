import { Button, Card, Tooltip } from 'antd';
import React from 'react';

import {
  priceBlock,
  footer
} from './style.module.css';

const { Meta } = Card;

export function CardItem({
  id,
  title,
  image,
  price
}) {

  return (
    <Card hoverable cover={<img alt="recipe" src={image} />}>
      <Meta
        title={
          <Tooltip title={title} placement="topLeft">
            {title}
          </Tooltip>
        }
        description={
          <div className={priceBlock}>
            <span
            >{price} $</span>
          </div>
        }
      />
      <footer className={footer}>
        <div>
          <Button key={id} 
            onClick={() => {}}
          >
            View details
          </Button>
        </div>
      </footer>
    </Card>
  );
}

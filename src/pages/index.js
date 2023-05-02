
import * as React from 'react';
import { CardItem } from '../components/card';
import { Layout } from '../components/layout';

const mockData = {
  id: 716428,
  title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
  image: 'https://spoonacular.com/recipeImages/716429-556x370.jpg',
  price: 1500,
};

const IndexPage = () => {
  return (
    <div>
    <Layout>
      <CardItem
        id={mockData.id}
        title={mockData.title}
        image={mockData.image}
        price={mockData.price}
      />
    </Layout>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

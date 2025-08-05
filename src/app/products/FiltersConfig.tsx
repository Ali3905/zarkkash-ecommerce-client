// filterConfig.js
// import CheckboxFilter from './CheckboxFilter';
import PriceRangeFilter from './PriceRangeFilter';
import SelectFilter from './SelectFilter';
// import RatingFilter from './RatingFilter';

export const filterConfig = [
  // {
  //   key: 'sizes',
  //   component: CheckboxFilter,
  //   props: {
  //     title: 'Size',
  //     options: [
  //       { value: 'XS', label: 'Extra Small' },
  //       { value: 'S', label: 'Small' },
  //       { value: 'M', label: 'Medium' },
  //       { value: 'L', label: 'Large' },
  //       { value: 'XL', label: 'Extra Large' },
  //       { value: 'XXL', label: 'Double XL' }
  //     ]
  //   }
  // },
  {
    key: 'priceRange',
    component: PriceRangeFilter,
    props: {
      title: 'Price Range',
      currency: 'Rs'
    }
  },
  {
    key: 'brands',
    component: SelectFilter,
    props: {
      title: 'Brands',
      options: [
        { value: 'rolex', label: 'Rolex' },
        { value: 'ap', label: 'Audemars Piguet' },
        { value: 'tissot', label: 'Tissot' },
        { value: 'hublot', label: 'Hublot' },
        { value: 'pp', label: 'Patek Phillips' },
        { value: 'aura', label: 'Arabic Aura' },
      ],
      multiple: true
    }
  },
  {
    key: 'strap',
    component: SelectFilter,
    props: {
      title: 'Strap',
      options: [
        { value: 'CHAIN', label: 'Chain' },
        { value: 'BELT', label: 'Belt' },
      ],
      multiple: true
    }
  },
];
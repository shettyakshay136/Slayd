const categories = [
    'Sale',
    'Brands',
    'Color',
    'Vibe',
    'Price',
    'Sale',
    'Brands',
    'Color',
];
const products = [
    { id: 1, name: 'Zara Brand', price: '₹3000', media: require('./src/Assets/Images/1.jpg') , type: 'image' },
    { id: 2, name: 'H&M Brand', price: '₹2000', media: require('./src/Assets/Images/2.jpg') , type: 'image' },
    { id: 3, name: 'Snitch Brand', price: '₹2000', type: 'video', media: require('./src/Assets/Images/v1.mp4') },
    { id: 4, name: 'Bulmain Brand', price: '₹3000', media: require('./src/Assets/Images/3.jpg'), type: 'image' },
    { id: 5, name: 'Snitch Brand', price: '₹2000', media: require('./src/Assets/Images/4.jpg'), type: 'image' },
    { id: 6, name: 'Snitch Brand', price: '₹2000', type: 'video', media: require('./src/Assets/Images/v2.mp4') },
  ];

  const BrandProducts = [
    { id: 1,  price: '₹3000', image: require('./src/Assets/Images/1.jpg') , des:'branding products shown here based on the user engagement' },
    { id: 2,  price: '₹2000', image: require('./src/Assets/Images/2.jpg') , des:'branding products shown here based on the user engagement'},
    { id: 3,  price: '₹3000', image: require('./src/Assets/Images/3.jpg') , des:'branding products shown here based on the user engagement' },
    { id: 4, price: '₹2000', image: require('./src/Assets/Images/4.jpg') , des:'branding products shown here based on the user engagement' },
  ];
  const SimilarProductsData = [
    { id: 1,  price: '₹3000', media: require('./src/Assets/Images/1.jpg') , type: 'image' , des:'branding products shown here based on the user engagement' },
    { id: 2,  price: '₹2000', media: require('./src/Assets/Images/2.jpg') , type: 'image' , des:'branding products shown here based on the user engagement'},
    { id: 3,  price: '₹3000', media: require('./src/Assets/Images/v2.mp4') , type: 'video' , des:'branding products shown here based on the user engagement' },
    { id: 4, price: '₹2000', media: require('./src/Assets/Images/8.jpg') , type: 'image' , des:'branding products shown here based on the user engagement' },
    { id: 5, price: '₹2000', media: require('./src/Assets/Images/7.jpg') , type: 'image' , des:'branding products shown here based on the user engagement' },
    { id: 6, price: '₹2000', media: require('./src/Assets/Images/v4.mp4') , type: 'video' , des:'branding products shown here based on the user engagement' },
    { id: 7, price: '₹2000', media: require('./src/Assets/Images/v3.mp4') , type: 'video' , des:'branding products shown here based on the user engagement' },
    { id: 8, price: '₹2000', media: require('./src/Assets/Images/9.jpg') , type: 'image' , des:'branding products shown here based on the user engagement' },
    { id: 9, price: '₹2000', media: require('./src/Assets/Images/v4.mp4') , type: 'video' , des:'branding products shown here based on the user engagement' },
    { id: 10, price: '₹2000', media: require('./src/Assets/Images/5.jpg') , type: 'image' , des:'branding products shown here based on the user engagement' },
    { id: 11, price: '₹2000', media: require('./src/Assets/Images/6.jpg') , type: 'image' , des:'branding products shown here based on the user engagement' },

  ];

export {categories , products , BrandProducts , SimilarProductsData}
import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const SideBar = ( { selectedCategory , setSelectedCategory } ) =>
(
    <Stack
      direction={{ xs: 'row', md: 'column' }}
      sx={{
        flex: 1,                                
        minWidth: { xs: 'max-content', md: 'auto' },
        overflowX: { xs: 'auto', md: 'visible' },
        overflowY: { xs: 'visible', md: 'auto' },
        py: 1,
        gap: 1,
        borderBottom: { xs: '1px solid #3d3d3d', md: 'none' },
      }}
    >

        {categories.map((category) => (
            <button
                className="category-btn"
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && '#FC1503', color:'white'
                }}
                key={category.name}
            >
                <span style={{color: category.name === selectedCategory ? 'white' : 'red' , marginRight: '15px'}}>{category.icon}</span>
                <span style={{opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
            </button>
        ))}
    </Stack>
)


export default SideBar
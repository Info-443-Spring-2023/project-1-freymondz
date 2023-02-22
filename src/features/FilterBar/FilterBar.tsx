import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import FilterList from './FilterList';

// TO DO Create Filter checklist
const FilterBar: React.FC = () => {
    return (
        <Card>
            <CardHeader title="Filters">
            </CardHeader>
            <FilterList></FilterList>

        </Card>
    )
}

export default FilterBar
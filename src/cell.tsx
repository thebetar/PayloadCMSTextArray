import React from 'react';

const Cell: React.FC<{ cellData: string[] }> = ({ cellData }) => {
	if (!cellData) {
		return '<No data>';
	}

	return Array.isArray(cellData) ? cellData.join(', ') : cellData;
};

export default Cell;

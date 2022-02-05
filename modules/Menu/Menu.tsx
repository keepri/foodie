import React from 'react';

import styles from './Menu.module.scss';

import ItemCard from '#components/Cards/ItemCard/ItemCard';
import { MenuSchema } from '#firebase/declarations/schemas';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	menu: MenuSchema;
}

const Menu: React.FC<Props> = ({ className, menu, ...rest }) => {
	const { categories } = menu;

	return (
		<div className={[styles['menu'], className].join(' ')} {...rest}>
			{categories.map(({ name, items }, index) => (
				<div key={`category_${index}`} className={styles['menu-category']}>
					<h2 style={{ marginBottom: '2rem', marginTop: '4rem' }}>{name}</h2>
					<div className={styles['menu-category-items']}>
						{items.map((item, index) => (
							<ItemCard key={`category_${name}_item_${index}`} index={index} item={item} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Menu;

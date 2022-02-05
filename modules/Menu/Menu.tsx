import React from 'react';

import styles from './Menu.module.scss';

import ItemCard from '#components/Cards/ItemCard/ItemCard';
import { MenuSchema } from '#firebase/declarations/schemas';
import Modal from '#components/Modal/Modal';
import { getLang } from '#controllers/getLang';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	menu: MenuSchema;
}

const Menu: React.FC<Props> = ({ className, menu, ...rest }) => {
	const lang = getLang();

	const { categories } = menu;

	const [itemNotAv, setItemNotAv] = React.useState<boolean>(false);

	const handleItemNotAv = React.useCallback(() => {
		setItemNotAv(true);
	}, []);

	return (
		<div className={[styles['menu'], className].join(' ')} {...rest}>
			{categories.map(({ name, items }, index) => (
				<div key={`category_${index}`} className={styles['menu-category']}>
					<h2 style={{ marginBottom: '2rem', marginTop: '4rem' }}>{name}</h2>
					<div className={styles['menu-category-items']}>
						{items.map((item, index) => (
							<ItemCard
								key={`category_${name}_item_${index}`}
								index={index}
								item={item}
								onItemNotAv={handleItemNotAv}
							/>
						))}
					</div>
				</div>
			))}

			{/* MODALS */}
			{itemNotAv && <Modal title={lang.itemNotAvTitle} body={lang.itemNotAvBody} setModal={setItemNotAv} />}
		</div>
	);
};

export default Menu;

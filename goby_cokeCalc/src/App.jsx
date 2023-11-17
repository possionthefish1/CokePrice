import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
	const [count, setCount] = useState(1);
	const [countTwo, setCountTwo] = useState(1);
	const [small, setSmall] = useState(false);

	const lites = small ? 0.375 : 0.422;
	const real = lites * 24;

	function handleReset() {
		setCount(1);
		setCountTwo(1);
		setSmall(!small);
	}
	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank' rel='noreferrer'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>
				โปรแกรมคำนวณราคา
				<a
					target='_blank'
					className='coke'
					href='https://www.coca-cola.com/th/th'
					rel='noreferrer'
				>
					โค้ก!
				</a>{' '}
				พ่ามพาม!
			</h1>
			<div className='card'>
				<button
					className='smol'
					onClick={() => setCount((count) => (count = 1))}
				>
					= 1
				</button>
				<button onClick={() => setCount((count) => count + 1)}>
					โค้กสองลิตรขวดละ 42 บาท, {count} ขวด
				</button>
				<button className='smol' onClick={() => setCount((count) => count + 5)}>
					+5
				</button>
				<p>
					รวม {2 * count} ลิตร {42 * count} บาท = ลิตรละ{' '}
					{(count * 42) / (count * 2)} บาท
				</p>
				<button onClick={() => setCountTwo((count) => count + 1)}>
					น้ำลังละ 235 บาท, {countTwo} ลัง
				</button>
				<p>
					ลังละ 24 ขวด (24 * {lites}) = {real} ลิตร
				</p>
				<p>
					รวม {(countTwo * real).toFixed(1)} ลิตร {countTwo * 235} บาท = ลิตรละ{' '}
					{((countTwo * 235) / (countTwo * real)).toFixed(1)} บาท
				</p>
			</div>
			<p onClick={handleReset} className='read-the-docs'>
				กดตรงนี้สลับปริมาณขวดน้ำ (
				<span className={small ? 'active' : ''}> เล็ก 375 มล.</span> ||{' '}
				<span className={!small ? 'active' : ''}>กลาง 422 มล.</span>)
			</p>
		</>
	);
}

export default App;

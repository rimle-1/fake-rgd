import './ticket.css';

export default function Ticket() {
  return (
    <div className='screen'>
      <div className='header'>
        <span className='back-arrow'>&#8249;</span>
        <span className='title'>Детали заказа</span>
      </div>

      <div className='tabs'>
        <div className='tab'>Маршрут поезда</div>
        <div className='tab'>Штрих-код</div>
        <div className='tab'>Действия</div>
      </div>

      <div className='order-info'>
        <div className='order-number'>Заказ № 5340 6380 9</div>
        <div className='order-status'>Статус: Оплачен</div>
      </div>

      <div className='route-card'>
        <div className='route-bg-fade'></div>
        <div className='route-text'>
          <div className='city'>
            <span className='arrow-icon'></span>
          </div>
          <div className='city'>Уфа</div>
          <div className='city'>Шакша</div>
        </div>
        <svg
          className='heart'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
        >
          <path
            d='M12 21s-7-4.35-9.5-8.5C0.5 9 2 5.5 5.5 5.5c2 0 3.5 1.2 4.5 2.7 1-1.5 2.5-2.7 4.5-2.7 3.5 0 5 3.5 3 7-2.5 4.15-9.5 8.5-9.5 8.5z'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </div>

      <div className='details'>
        <div className='train-info'>
          Пригородный поезд | БАШППК | Пригородный
        </div>
        <div className='date'>12 февраля</div>

        <div className='field-label'>место</div>
        <div className='field-value'>Без указания мест</div>
        <div className='field-value bold'>возврату не подлежит</div>

        <div className='field-label barcode-label'>штриккод</div>
        <div className='barcode-value'>Для турникета</div>
      </div>

      <div className='barcode'>
        <svg
          viewBox='0 0 320 90'
          preserveAspectRatio='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='320' height='90' fill='#ffffff' />
          <g fill='#000000'>
            <rect x='0' y='0' width='3' height='90' />
            <rect x='5' y='0' width='1' height='90' />
            <rect x='9' y='0' width='2' height='90' />
            <rect x='14' y='0' width='1' height='90' />
            <rect x='17' y='0' width='3' height='90' />
            <rect x='23' y='0' width='1' height='90' />
            <rect x='26' y='0' width='1' height='90' />
            <rect x='30' y='0' width='2' height='90' />
            <rect x='35' y='0' width='1' height='90' />
            <rect x='38' y='0' width='3' height='90' />
            <rect x='43' y='0' width='1' height='90' />
            <rect x='47' y='0' width='1' height='90' />
            <rect x='50' y='0' width='2' height='90' />
            <rect x='55' y='0' width='1' height='90' />
            <rect x='58' y='0' width='2' height='90' />
            <rect x='63' y='0' width='1' height='90' />
            <rect x='66' y='0' width='3' height='90' />
            <rect x='71' y='0' width='1' height='90' />
            <rect x='75' y='0' width='2' height='90' />
            <rect x='80' y='0' width='1' height='90' />
            <rect x='83' y='0' width='1' height='90' />
            <rect x='87' y='0' width='3' height='90' />
            <rect x='92' y='0' width='1' height='90' />
            <rect x='96' y='0' width='2' height='90' />
            <rect x='101' y='0' width='1' height='90' />
            <rect x='104' y='0' width='1' height='90' />
            <rect x='108' y='0' width='2' height='90' />
            <rect x='113' y='0' width='1' height='90' />
            <rect x='116' y='0' width='3' height='90' />
            <rect x='121' y='0' width='1' height='90' />
            <rect x='125' y='0' width='2' height='90' />
            <rect x='130' y='0' width='1' height='90' />
            <rect x='133' y='0' width='1' height='90' />
            <rect x='137' y='0' width='3' height='90' />
            <rect x='142' y='0' width='1' height='90' />
            <rect x='146' y='0' width='2' height='90' />
            <rect x='151' y='0' width='1' height='90' />
            <rect x='155' y='0' width='1' height='90' />
            <rect x='158' y='0' width='3' height='90' />
            <rect x='163' y='0' width='1' height='90' />
            <rect x='167' y='0' width='2' height='90' />
            <rect x='172' y='0' width='1' height='90' />
            <rect x='175' y='0' width='1' height='90' />
            <rect x='179' y='0' width='3' height='90' />
            <rect x='184' y='0' width='1' height='90' />
            <rect x='188' y='0' width='2' height='90' />
            <rect x='193' y='0' width='1' height='90' />
            <rect x='196' y='0' width='1' height='90' />
            <rect x='200' y='0' width='2' height='90' />
            <rect x='205' y='0' width='1' height='90' />
            <rect x='208' y='0' width='3' height='90' />
            <rect x='213' y='0' width='1' height='90' />
            <rect x='217' y='0' width='2' height='90' />
            <rect x='222' y='0' width='1' height='90' />
            <rect x='225' y='0' width='1' height='90' />
            <rect x='229' y='0' width='3' height='90' />
            <rect x='234' y='0' width='1' height='90' />
            <rect x='238' y='0' width='2' height='90' />
            <rect x='243' y='0' width='1' height='90' />
            <rect x='246' y='0' width='1' height='90' />
            <rect x='250' y='0' width='3' height='90' />
            <rect x='255' y='0' width='1' height='90' />
            <rect x='259' y='0' width='2' height='90' />
            <rect x='264' y='0' width='1' height='90' />
            <rect x='267' y='0' width='1' height='90' />
            <rect x='271' y='0' width='2' height='90' />
            <rect x='276' y='0' width='1' height='90' />
            <rect x='279' y='0' width='3' height='90' />
            <rect x='284' y='0' width='1' height='90' />
            <rect x='288' y='0' width='2' height='90' />
            <rect x='293' y='0' width='1' height='90' />
            <rect x='296' y='0' width='1' height='90' />
            <rect x='300' y='0' width='3' height='90' />
            <rect x='305' y='0' width='1' height='90' />
            <rect x='309' y='0' width='2' height='90' />
            <rect x='314' y='0' width='1' height='90' />
            <rect x='317' y='0' width='3' height='90' />
          </g>
        </svg>
      </div>

      <div className='fullscreen-link'>РАЗВЕРНУТЬ НА ВЕСЬ ЭКРАН</div>

      <div className='passenger-section'>
        <div className='passenger-label'>пассажир</div>
      </div>
    </div>
  );
}

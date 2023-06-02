$(document).ready(function () {
	let itemCount = 0;
	let totalPrice = 0;

	$('.cart-container').hide();

	$('li.lastli').click(function () {
		$('.cart-container').toggle(); // переключает отображение корзины
	});

	$('li.lastli').click(function () {
		$('.cart-container').show();
	});

	$('.close-btn').click(function () {
		$('.cart-container').hide(); // Закрывает корзину
		itemCount = 0;
		totalPrice = 0;
		$('.item-count').text(itemCount);
		$('.total-price').text('Total: $' + totalPrice.toFixed(2));

	});


	$('button').click(function () {
		let item = $(this).closest('li');
		let itemImg = item.find('img').attr('src');
		let itemName = item.find('h3').text();
		let itemPrice = parseFloat(item.find('p').text().replace('ЦЕНА: $', ''));
		itemCount++;
		totalPrice += itemPrice;

		$('.item-count').text(itemCount);
		$('.total-price').text('Total: $' + totalPrice.toFixed(2));

		$('.cart-items').append('<li><img src="' + itemImg + '"><span class="item-name">' + itemName + '</span><span class="item-price">$' + itemPrice.toFixed(2) + '</span><button class="delete-btn">X</button></li>');
	});

	$(document).on('click', '.delete-btn', function () {
		let item = $(this).closest('li');
		let itemPrice = parseFloat(item.find('.item-price').text().replace('$', ''));
		itemCount--;
		totalPrice -= itemPrice;

		$('.item-count').text(itemCount);
		$('.total-price').text('Total: $' + totalPrice.toFixed(2));

		item.remove();
	});


	// Сохраняем cart-items в localStorage
	localStorage.setItem('cartItems', $('.cart-items').html());

	// Загружаем cart-items из localStorage
	var savedCartItems = localStorage.getItem('cartItems');
	if (savedCartItems) {
		$('.cart-items').html(savedCartItems);
	}


});

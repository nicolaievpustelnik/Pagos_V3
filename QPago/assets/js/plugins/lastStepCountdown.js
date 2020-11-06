var disparado = false;

function redirectToEcommerce() {
	if(!disparado) {
		disparado = true;
		HoldOn.open({
	      theme:'sk-circle',
	      message:"<h4>Redireccionando al E-commerce</h4>"
	    });
		window.location.href = "file:///C:/Users/Seba_pc/Desktop/QPago/payment.html";
	}
}

(function($) {

	$.fn.tkCountdown = function () {
        this.countdown({
            date: moment().add((this.data('value') || 2), (this.data('unit') || 'hour')).format("MMMM D, YYYY HH:mm:ss"),
			// date: "March 7, 2016 13:03:26",
			render: function (date) {
			
				if (date.days > 0) 
					$days = '<span class="h5 text-primary">' + date.days  + '</span>days ';
				else 
					$days = '';
				
				if (date.hours > 0) 
					$hours = '<span class="h5 text-primary">' + this.leadingZeros(date.hours)  + '</span> hrs ';
				else 
					$hours = '';

				if (date.min > 0) 
					$min = '<span class="h5 text-primary"><font color="#f39200">' + this.leadingZeros(date.min)  + '</font></span> min ';
				else 
					$min = '';
				if (date.sec > 0) 
					$sec = '<span class="h5 text-primary"><font color="#f39200">' + this.leadingZeros(date.sec) + '</font></span>';
				else 
					$sec = '<span class="h5 text-primary"><font color="#f39200">00</font></span>';

				this.el.innerHTML = $days + $hours + $min + $sec;


				if(this.leadingZeros(date.sec) == '00' && this.leadingZeros(date.min) == '00'){
                    
					redirectToEcommerce();
                    
				}
			}
        });
    };

	$('.countdown').tkCountdown();

}(jQuery));
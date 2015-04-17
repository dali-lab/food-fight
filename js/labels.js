//click events for interactive food label pictures 
$(document).ready(function(){
	console.log("yolololo");
	$('.label-button').click(function(){
		console.log("button clicked");

		//testing
		// $('.label-click-info').text($(this).attr('id') + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae interdum metus, eget pharetra leo. Donec eros tortor, eleifend sed molestie a, ultrices vel nibh. Vestibulum blandit, nunc eu adipiscing mattis, dui ante pulvinar diam,quis tristique nibh elit id tortor. Nullam metus dolor, aliquam sed .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae interdum metus, eget pharetra leo. Donec eros tortor, eleifend sed molestie a, ultrices vel nibh. Vestibulum blandit, nunc eu adipiscing mattis, dui ante pulvinar diam,quis tristique nibh elit id tortor. Nullam metus dolor, aliquam sed .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae interdum metus, eget pharetra leo. Donec eros tortor, eleifend sed molestie a, ultrices vel nibh. Vestibulum blandit, nunc eu adipiscing mattis, dui ante pulvinar diam,quis tristique nibh elit id tortor. Nullam metus dolor, aliquam sed .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae interdum metus, eget pharetra leo. Donec eros tortor, eleifend sed molestie a, ultrices vel nibh. Vestibulum blandit, nunc eu adipiscing mattis, dui ante pulvinar diam,quis tristique nibh elit id tortor. Nullam metus dolor, aliquam sed .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae interdum metus, eget pharetra leo. Donec eros tortor, eleifend sed molestie a, ultrices vel nibh. Vestibulum blandit, nunc eu adipiscing mattis, dui ante pulvinar diam,quis tristique nibh elit id tortor. Nullam metus dolor, aliquam sed .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae interdum metus, eget pharetra leo. Donec eros tortor, eleifend sed molestie a, ultrices vel nibh. Vestibulum blandit, nunc eu adipiscing mattis, dui ante pulvinar diam,quis tristique nibh elit id tortor. Nullam metus dolor, aliquam sed .");
		//testing

		//Armin: uncomment this switch statement
		switch($(this).attr('id')) {
			//red label
			case 'USDA-organic':
				$('.label-click-info').text("What it means: This term means that a product has been produced according to the standards in the Organics Foods Production Act (OFPA).93 Generally, a producer will not be able to use this term unless they or their supplier are certified as organic by the USDA under the National Organics Program.94 Basically, organic production limits the use of artificial chemicals, pesticides, hormones, antibiotics, and other inputs, as well as genetic engineering. For more information about the specific organic standards for meat, please see our additional resources page.");
				break;
			// yellow label
			case 'all-natural':
				$('.label-click-info').text("What it is: This claim has not been precisely defined by the USDA, however, it means that the eggs are free of artificial ingredients or added colors and have only been minimally processed. Minimal processing means that the product was processed in a way that has not fundamentally changed the product. If a producer chooses to use this term, the label must include a statement explaining how the producer has defined the term. E.g., the label must say “no artificial ingredients” or “minimally processed.” Most, if not all, eggs in shells are not processed. 83");
				break;
			//grey label
			case 'no-antibiotics':
				$('.label-click-info').text("What it means: This language may be used on a label if the producer can provide “sufficient documentation” to the USDA to show the chicken was raised without the use of antibiotics.");
				break;
			//green label
			case 'free-roaming':
				$('.label-click-info').text("What it means: This term has only been defined by the USDA for poultry products. When used by a producer for another type of meat, the term usually means something similar to the definition used for poultry, but does not need to conform to that standard.");
				break;
			case 'no-hormones':
				$('.label-click-info').text("What it means: The USDA does not permit the use of hormones in the raising of poultry. Consequently, this claim cannot be used on a poultry label unless it is accompanied by language stating that “federal regulations prohibit the use of hormones” or some other qualifying language approved by the agency.");
				break;
			// yellow label
			case 'grade-a':
				$('.label-click-info').text("What it means: The USDA provides a voluntary grading service that inspects eggs in the shell and assigns them a grade. Under the program, consumers can purchase products with official grading from the agency as a means of determining the product’s quality.86 The grades depend on the egg’s interior and exterior qualities. A Grade A classification is the second highest");
				break;
			//grey label
			case 'omega-3':
				$('.label-click-info').text("What it means: This claim means the chickens have been fed a diet that includes certain ingredients (e.g., flax seed, fish oil, or algae) to increase the amount of omega 3 fatty acids found in the eggs.");
				break;
			//green label
			case 'saturated-fat':
				$('.label-click-info').text("What it means: This claim means the eggs have less saturated fat than the normal product standard for eggs of the same size.");
				break;
			case 'vitamin-e':
				$('.label-click-info').text("What it means: This claim means the eggs contain 20% or more of the daily reference value for vitamin E.");
				break;
			case 'cage-free':
				$('.label-click-info').text("What it is: This term is not defined by the USDA. However, if a USDA-inspected producer wants to use the term “cage free” on its packaging, the agency must first verify the claim. The USDA will allow the use of the term if the poultry flock was able to freely roam a building, room, or enclosed area with unlimited access to food and fresh water.");
				break;
			case 'poultry-all-natural':
				$('.label-click-info').text("What it means: This claim has not been precisely defined by the USDA, however, it means that the product is free of artificial ingredients or added colors and has only been minimally processed. Minimal processing means that the product was processed in a way that has not fundamentally changed the product. If a producer chooses to use this term, the label must include a statement explaining how the producer has defined the term. E.g., the label must say “no artificial ingredients” or “minimally processed.");
			case 'poultry-no-antibiotics':
				$('.label-click-info').text("What it means: This language may be used on a label if the producer can provide “sufficient documentation” to the USDA to show the animal was raised without the use of antibiotics.");
				break;
			case 'free-range':
				$('.label-click-info').text("What it is: The USDA has not provided a precise definition of these terms. If a USDA-inspected producer wants to use the term “free range,” the agency must first verify the claim prior to its inclusion on the label. The USDA will allow the use of the term if the flock was provided shelter in a building, room, or area with unlimited access to food, fresh water, and continuous access to outdoors, which can simply mean the facility has a window. ");
				break;
			case 'poultry-no-hormones':
				$('.label-click-info').text("What it is: The USDA does not permit the use of hormones in the raising of poultry. Consequently, this claim cannot be used on a poultry label unless it is accompanied by language stating that “federal regulations prohibit the use of hormones” in poultry.");
				break;
			case 'vegetarian-fed':
				$('.label-click-info').text("What it means: This term is not defined by the USDA. A producer may use this term on a label if the poultry feed does not include animal byproducts. No independent third party verifies this claim and the USDA does not require any verification before its inclusion on a label.");
				break;
	};
});

});



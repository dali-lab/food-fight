//click events for interactive food label pictures
$(document).ready(function(){
	$('.label-button').click(function(){
		switch($(this).attr('id')) {

      // Labels related to the pork page
      case 'pork-naturally-raised':
        $('.label-click-info').html("<h2>Naturally Raised</h2> <p>What it means: The USDA has defined this claim to mean that the livestock used for these products were raised entirely without growth promotants or hormones, antibiotics and have never been fed antibiotics</p>");
        break;
      case 'pork-locally-grown':
        $('.label-click-info').html("<h2>Locally Grown</h2> <p>What it means: This term is not defined by the USDA. A producer may use this term on a label if the poultry feed does not include animal byproducts. No independent third party verifies this claim and the USDA does not require any verification before its inclusion on a label.</p>");
        break;
      case 'pork-minimally-processed':
        $('.label-click-info').html("<h2>Minimally Processed</h2> <p>What it means: The USDA defines this claim to mean that the product was processed such that it was not fundamentally changed during processing.</p>");
        break;
      case 'pork-uncured':
        $('.label-click-info').html("<h2>Uncured</h2> <p>What it means: This claim means the product has been processed without the use of nitrates or nitrites.</p>");
        break;

    //processed page labels. NOT WORKING atm
     case 'processed-calcium':
        $('.label-click-info').html("<h2>Calcium Builds Strong Bones</h2> <p>What it means: This is an example of a voluntary structure function claim which describes the effect that an individual nutrient or substance has on the normal structure and function of the body. For example, “calcium builds strong bones” or “fiber maintains bowel regularity.” The key aspect of a structure function claim is that it relates to the normal function of the human body, which is different from a health claim that deals specifically with diseases and the disease reducing or preventing qualities of a product. These types of claims do not require pre-approval from the FDA. If a producer wants to make a structure function claim they must include the following disclaimer: “This statement has not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.”</p>");
        console.log("hello");
        break;
     case 'processed-lowfat':
        $('.label-click-info').html("<h2>Low Fat</h2> <p>What it means: This is an example of a voluntary nutrient content claim, which characterizes the level of an individual nutrient in the food product. For example, low fat, high in fiber, or reduced sodium. Only the following claims can be made with regard to any individual nutrient: (1) free; (2) low; (3) reduced; (4) fewer; (5) lean; (6) high; (7) less; (8) more; (9) extra lean; (10) good source; (11) light; and (12) healthy. There are specific criteria laid out in federal law that govern when these terms can be used. For example, a label can say “fat free” if the products contains less than 0.5 grams of fat per serving.</p>");
        break;
     case 'processed-heartdisease':
        $('.label-click-info').html("<h2>Can Reduce the Risk of Heart Disease</h2> <p>What it means: This is an example of a voluntary health claim, which either expressly, or by implication, describes the relationship between: (A) the food product or any component of the food; and (B) a disease or health related condition. A claim on a label is only considered a health claim if it references disease risk reduction. These claims can either be in the form of an affirmative statement, such as “can help lower cholesterol and reduce the risk of heart disease” or they can be implied with the use of symbols or images. For example, a heart symbol placed on a package can imply that a food is heart healthy.</p>");
        break;
     case 'processed-naturalflavor':
        $('.label-click-info').html("<h2>Natural Flavoring</h2> <p>What it means: This claim means the product has been processed without the use of nitrates or nitrites.</p>");
        break;
     case 'processed-identity':
        $('.label-click-info').html("<h2>Statement of Identity</h2> <p>What it means: What it is: This is simply the name of the food product. For example, “peanut butter” is a statement of identity. The statement of identity can be either: (1) the name required by law for certain products (the FDA has specific regulations for what foods must contain to be called certain things; e.g., in addition to other specific requirements, for a product to be called peanut butter, it must consist of ground peanuts to which 10% of stabilizing agents can be added, however, those stabilizing agents cannot be artificial flavorings, artificial preservatives, chemical preservatives, or color additives; (2) the common or usual name of the food; or (3) an appropriately descriptive term or fanciful name </p>");
        break;
     case 'processed-quantity':
        $('.label-click-info').html("<h2>Net Quantity</h2> <p>What it means: This indicates the amount of food that is in the container or package. The quantity must be expressed in either: (1) weight; (2) measure; or (3) numeric count. Only the amount of food in the package is included in the net quantity. The weight of the package, container, wrappers, or packing material is not included in the net quantity. However, any water or other liquid added to the food is included in the net quantity.</p>");
        break;




		//red label
		case 'USDA-organic':
			$('.label-click-info').html("<h2>Organic</h2> <p>What it means: This term means that a product has been produced according to the standards in the Organics Foods Production Act (OFPA).93 Generally, a producer will not be able to use this term unless they or their supplier are certified as organic by the USDA under the National Organics Program.94 Basically, organic production limits the use of artificial chemicals, pesticides, hormones, antibiotics, and other inputs, as well as genetic engineering. For more information about the specific organic standards for meat, please see our additional resources page.</p>");
			break;
		// yellow label
		case 'all-natural':
			$('.label-click-info').html("<h2>All-Natural</h2> <p> What it is: This claim has not been precisely defined by the USDA, however, it means that the eggs are free of artificial ingredients or added colors and have only been minimally processed. Minimal processing means that the product was processed in a way that has not fundamentally changed the product. If a producer chooses to use this term, the label must include a statement explaining how the producer has defined the term. E.g., the label must say “no artificial ingredients” or “minimally processed.” Most, if not all, eggs in shells are not processed.</p>");
			break;
		//grey label
		case 'no-antibiotics':
			$('.label-click-info').html("<h2>Antibiotic Free</h2> <p>What it means: This language may be used on a label if the producer can provide “sufficient documentation” to the USDA to show the chicken was raised without the use of antibiotics.</p>");
			break;
		//green label
		case 'free-roaming':
			$('.label-click-info').html("<h2>Free-Roam</h2> <p>What it means: This term has only been defined by the USDA for poultry products. When used by a producer for another type of meat, the term usually means something similar to the definition used for poultry, but does not need to conform to that standard.</p>");
			break;
		case 'no-hormones':
			$('.label-click-info').html("<h2>Hormone Free</h2> <p>What it means: The USDA does not permit the use of hormones in the raising of poultry. Consequently, this claim cannot be used on a poultry label unless it is accompanied by language stating that “federal regulations prohibit the use of hormones” or some other qualifying language approved by the agency.</p>");
			break;
		// yellow label
		case 'grade-a':
			$('.label-click-info').html("<h2>Grade-A</h2> <p>What it means: The USDA provides a voluntary grading service that inspects eggs in the shell and assigns them a grade. Under the program, consumers can purchase products with official grading from the agency as a means of determining the product’s quality.86 The grades depend on the egg’s interior and exterior qualities. A Grade A classification is the second highest</p>");
			break;
		//grey label
		case 'omega-3':
			$('.label-click-info').html("<h2>Omega-3</h2> <p>What it means: This claim means the chickens have been fed a diet that includes certain ingredients (e.g., flax seed, fish oil, or algae) to increase the amount of omega 3 fatty acids found in the eggs.</p>");
			break;
		//green label
		case 'saturated-fat':
			$('.label-click-info').html("<h2>Less Saturated-Fat</h2> <p>What it means: This claim means the eggs have less saturated fat than the normal product standard for eggs of the same size.</p>");
			break;
		case 'vitamin-e':
			$('.label-click-info').html("<h2>Vitamin-E</h2> <p>What it means: This claim means the eggs contain 20% or more of the daily reference value for vitamin E.</p>");
			break;
		case 'cage-free':
			$('.label-click-info').html("<h2>Cage-Free</h2> <p>What it is: This term is not defined by the USDA. However, if a USDA-inspected producer wants to use the term “cage free” on its packaging, the agency must first verify the claim. The USDA will allow the use of the term if the poultry flock was able to freely roam a building, room, or enclosed area with unlimited access to food and fresh water.</p>");
			break;
		case 'poultry-all-natural':
			$('.label-click-info').html("<h2>All-Natural</h2> <p>What it means: This claim has not been precisely defined by the USDA, however, it means that the product is free of artificial ingredients or added colors and has only been minimally processed. Minimal processing means that the product was processed in a way that has not fundamentally changed the product. If a producer chooses to use this term, the label must include a statement explaining how the producer has defined the term. E.g., the label must say “no artificial ingredients” or “minimally processed.</p>");
		case 'poultry-no-antibiotics':
			$('.label-click-info').html("<h2>Antibiotic Free</h2> <p>What it means: This language may be used on a label if the producer can provide “sufficient documentation” to the USDA to show the animal was raised without the use of antibiotics.</p>");
			break;
		case 'free-range':
			$('.label-click-info').html("<h2>Free Range</h2> <p>What it is: The USDA has not provided a precise definition of these terms. If a USDA-inspected producer wants to use the term “free range,” the agency must first verify the claim prior to its inclusion on the label. The USDA will allow the use of the term if the flock was provided shelter in a building, room, or area with unlimited access to food, fresh water, and continuous access to outdoors, which can simply mean the facility has a window.</p> ");
			break;
		case 'poultry-no-hormones':
			$('.label-click-info').html("<h2>Hormone Free</h2> <p>What it is: The USDA does not permit the use of hormones in the raising of poultry. Consequently, this claim cannot be used on a poultry label unless it is accompanied by language stating that “federal regulations prohibit the use of hormones” in poultry.</p>");
			break;
		case 'vegetarian-fed':
			$('.label-click-info').html("<h2>Vegetarian-Fed</h2> <p>What it means: This term is not defined by the USDA. A producer may use this term on a label if the poultry feed does not include animal byproducts. No independent third party verifies this claim and the USDA does not require any verification before its inclusion on a label.</p>");
			break;
		case 'meat-grass-fed':
			$('.label-click-info').html("<h2>Grass Fed</h2> <p>What it means: If a USDA-inspected producer wants to use this term, the agency must first verify the claim. The USDA will allow the use of the term if the producer can show that the animals received a majority of their nutrients from grass throughout their life. This claim does not ensure that the animal was pastured, as it can be considered grass fed while confined but receiving grass or forage for feed.</p>");
			break;
		case 'meat-organic':
			$('.label-click-info').html("<h2>Organic</h2> <p>What it means: This term means that a product has been produced according to the standards in the Organics Foods Production Act (OFPA). Generally, a producer will not be able to use this term unless they or their supplier are certified as organic by the USDA under the National Organics Program. Basically, organic production limits the use of artificial chemicals, pesticides, hormones, antibiotics, and other inputs, as well as genetic engineering. For more information about the specific organic standards for meat, please see our additional resources page.</p>");
			break;
		case 'meat-free-roaming':
			$('.label-click-info').html("<h2>Free Roaming</h2> <p>What it is: This term has only been defined by the USDA for poultry products. When used by a producer for another type of meat, the term usually means something similar to the definition used for poultry, but does not need to conform to that standard.</p>");
			break;
		case 'meat-hormone-free':
			$('.label-click-info').html("<h2>Hormone Free</h2> <p>What this means: Unlike poultry and pork, this claim can be used on beef. It may be approved by the USDA if “sufficient documentation” is provided to the agency showing no hormones were used in the raising of the animal.</p>");
			break;
		case 'meat-pasture-raised':
			$('.label-click-info').html("<h2>Pasture Raised</h2> <p>What it means: This claim is not defined by the USDA. The term suggests that the animal was raised outside or on pasture, but because there is no legal definition of this term, it can mean what the producer suggests it does.</p>");
			break;
	};
});

});




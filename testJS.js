var human = {
	name: "Алексей",
	high: 185,
	weight: 75
}

//alert(human.name);

for (var key in human){
	alert(key + ": " + human[key]);
}
function adjustResource(resource, value){
    const currentResourceInput = document.getElementById(`${resource}-count`);
    const currentResourceCount = Number(currentResourceInput.value);

    const newResourceValue = currentResourceCount + value;

    if(newResourceValue <= 0){
        currentResourceInput.value = 0;
    } else {
        currentResourceInput.value = newResourceValue
    }
}
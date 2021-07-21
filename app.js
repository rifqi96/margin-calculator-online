// Methods
function calculate(maxLossPercentage, maxLossAmount, maxMargin) {

    // Calculate margin required
    const realMargin = maxLossAmount / (maxLossPercentage / 100);
    let marginRequired = realMargin;
    if (maxMargin && maxMargin !== realMargin) marginRequired = maxMargin;

    // Calculate leverage required
    const leverage = realMargin / marginRequired;

    const result = {
        realMargin,
        marginRequired,
        leverage,
    };
    return result;
}

function submitHandler (ev) {
    ev.preventDefault();
    const $lossPercentage = document.getElementById('field-loss-percentage');
    const lossPercentage = $lossPercentage.value;
    
    const $maxLoss = document.getElementById('field-max-loss');
    const maxLoss = $maxLoss.value;
    
    const $maxMargin = document.getElementById('field-max-margin');
    const maxMargin = $maxMargin.value;

    const result = calculate(lossPercentage, maxLoss, maxMargin);
    
    const $marginRequired = document.getElementById('result-margin-required');
    $marginRequired.innerText = result.marginRequired;
    const $leverageRequired = document.getElementById('result-leverage-required');
    $leverageRequired.innerText = result.leverage;
    const $realMargin = document.getElementById('result-real-margin');
    $realMargin.innerText = result.realMargin;
}

document.getElementById('form-submit-btn').addEventListener('click', submitHandler);
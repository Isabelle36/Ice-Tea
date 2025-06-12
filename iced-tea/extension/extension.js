const vscode = require('vscode');

async function reviewPrompt(context) {
    const lastPrompt = context.globalState.get('lastReviewPrompt', 0);
    const lastAccepted = context.globalState.get('lastReviewAccepted', false);
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const sevenDays = 7 * oneDay;

    if ((lastAccepted && now - lastPrompt < sevenDays) || (!lastAccepted && now - lastPrompt < oneDay)) {
        return;
    }

    const selection = await vscode.window.showInformationMessage(
        "Loving our themes? Leave us a review on the marketplace! It takes less than a minute.",
        "Leave a review", "Not now"
    );
    context.globalState.update('lastReviewPrompt', now);
    if (selection === "Leave a review") {
        context.globalState.update('lastReviewAccepted', true);
        vscode.env.openExternal(vscode.Uri.parse("https://marketplace.visualstudio.com/items?itemName=AlfiNikhat.iced-tea"));
    } else {
        context.globalState.update('lastReviewAccepted', false);
    }
}

function activate(context) {
    reviewPrompt(context);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};


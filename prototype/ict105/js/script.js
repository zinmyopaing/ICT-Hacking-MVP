document.addEventListener("DOMContentLoaded", function () {

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const tryDemoButton = document.getElementById("tryDemoBtn");
    const finalCtaButton = document.getElementById("finalCtaBtn");

    function recordCtaClick(buttonName) {

        let metrics =
            JSON.parse(localStorage.getItem("acquisitionMetrics")) || {
                landingPageVisits: 0,
                demoClicks: 0,
                lastClickedButton: "",
                lastClickDate: ""
            };

        metrics.demoClicks += 1;
        metrics.lastClickedButton = buttonName;
        metrics.lastClickDate = new Date().toISOString();

        localStorage.setItem(
            "acquisitionMetrics",
            JSON.stringify(metrics)
        );
    }

    let metrics =
        JSON.parse(localStorage.getItem("acquisitionMetrics")) || {
            landingPageVisits: 0,
            demoClicks: 0,
            lastClickedButton: "",
            lastClickDate: ""
        };

    metrics.landingPageVisits += 1;

    localStorage.setItem(
        "acquisitionMetrics",
        JSON.stringify(metrics)
    );

    if (tryDemoButton) {
        tryDemoButton.addEventListener("click", function () {
            recordCtaClick("Try Demo");
        });
    }

    if (finalCtaButton) {
        finalCtaButton.addEventListener("click", function () {
            recordCtaClick("Explore Study Groups");
        });
    }

});
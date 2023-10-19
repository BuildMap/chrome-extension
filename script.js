const cardsData = {
    framework1: [
        { 
            title: "Jobs to be Done", 
            desc: "Understand the 'job' your product is hired for." ,
            content: `- Identify Customer: Start by identifying the target customer segment you aim to serve. For example, a fitness app might focus on 'busy professionals looking for 30-minute workouts'.
            - Define 'Job': Clearly define the core 'job' your product performs for the customer. For example, a food delivery app's job might be 'providing a convenient and fast way to enjoy a variety of foods'.
            - Conduct Interviews: Conduct qualitative interviews with potential or current customers to better understand their needs and pain points. For example, asking questions like 'What do you find most frustrating about current solutions in the market?'
            - Analyze Results: Systematically analyze the interview results to extract common themes or needs. For instance, if a majority mention the speed of service, that's a key area to focus on.
            - Iterate: Based on your findings, iterate on your product or service offering to better perform the 'job' customers hire it for. For example, if convenience is key, look into streamlining the user interface.`
        }
    ]
}




const elements = document.getElementsByClassName('dropdown');
const prob = elements[0];
prob.addEventListener('change', function(event) {
        const internal_elem = document.getElementsByClassName('info-card-text');
        internal_elem[0].style.display = 'none';
        //Code to filter the cards based on the selected prob
        //displayCardsForProblem(prob)
        const selectedValue = event.target.value;
});

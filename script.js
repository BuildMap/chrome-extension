// Fetch data from JSON files
let problemsFrameworksLink = {
    "UnderstandingCustomerNeeds": ["Jobs to be Done", "Business Model Canvas", "CIRCLES Method", "AARRR Pirate Metrics", "RFM Model", "Hook Model", "Lean Canvas", "SWOT Analysis"],
    "FindingProductMarketFit": ["Jobs to be Done", "Business Model Canvas", "AARRR Pirate Metrics", "RFM Model", "Kano Model", "Value Proposition Canvas"],
    "PrioritizingFeatures": ["Kano Model", "RICE Scoring Model", "Weighted Scoring", "Jobs to be Done", "Business Model Canvas", "Feature Prioritization"],
    "ImprovingUserSatisfaction": ["Kano Model", "CIRCLES Method", "Double Diamond", "Business Model Canvas", "RFM Model", "User Story Mapping"],
    "SettingGoals": ["North Star Framework", "The 3 Horizons Model", "GIST Planning Cycle", "Business Model Canvas", "AARRR Pirate Metrics", "Product Roadmap"],
    "AligningTeamEfforts": ["North Star Framework", "DACI", "Business Model Canvas", "Jobs to be Done", "GIST Planning Cycle", "Scrum Framework"],
    "OrganizingTeams": ["Product Squads", "North Star Framework", "The 3 Horizons Model", "Business Model Canvas", "Double Diamond", "Agile Framework"],
    "ImplementingAgileDevelopment": ["Product Squads", "GIST Planning Cycle", "Jobs to be Done", "North Star Framework", "Weighted Scoring", "Scrum Framework"],
    "DesigningProducts": ["CIRCLES Method", "Double Diamond", "Jobs to be Done", "Kano Model", "AARRR Pirate Metrics", "Persona Creation"],
    "SolvingProblems": ["CIRCLES Method", "Double Diamond", "Kano Model", "Jobs to be Done", "Business Model Canvas", "Five Whys"],
    "StrategicPlanning": ["Business Model Canvas", "BCG Growth-Share Matrix", "Innovation of Diffusion", "Product Team Competencies", "The 3 Horizons Model", "Blue Ocean Strategy"],
    "BusinessModeling": ["Business Model Canvas", "Jobs to be Done", "AARRR Pirate Metrics", "RFM Model", "Kano Model", "Lean Canvas"],
    "DevelopingTeamSkills": ["Product Team Competencies", "North Star Framework", "CIRCLES Method", "Double Diamond", "BCG Growth-Share Matrix", "Agile Framework"],
    "SkillAssessment": ["Product Team Competencies", "The 3 Horizons Model", "RFM Model", "CIRCLES Method", "Kano Model", "User Story Mapping"],
    "MakingDecisions": ["Weighted Scoring", "DACI", "RICE Scoring Model", "North Star Framework", "Business Model Canvas", "Five Whys"],
    "PrioritizingOptions": ["Weighted Scoring", "RICE Scoring Model", "Kano Model", "Business Model Canvas", "AARRR Pirate Metrics", "Feature Matrix"],
    "AgilePlanning": ["GIST Planning Cycle", "Jobs to be Done", "The 3 Horizons Model", "Business Model Canvas", "Product Squads", "Agile Framework"],
    "ManagingTasks": ["GIST Planning Cycle", "Weighted Scoring", "Product Squads", "Jobs to be Done", "RICE Scoring Model", "Product Roadmap"],
    "TrackingCustomerBehavior": ["AARRR Pirate Metrics", "RFM Model", "Jobs to be Done", "CIRCLES Method", "Kano Model", "Value Proposition Canvas"],
    "DataAnalytics": ["AARRR Pirate Metrics", "RFM Model", "Business Model Canvas", "Innovation of Diffusion", "Jobs to be Done", "SWOT Analysis"],
    "PlanningForGrowth": ["BCG Growth-Share Matrix", "Innovation of Diffusion", "The 3 Horizons Model", "Jobs to be Done", "Business Model Canvas", "Blue Ocean Strategy"],
    "SegmentingCustomers": ["RFM Model", "AARRR Pirate Metrics", "Jobs to be Done", "Business Model Canvas", "Kano Model", "Persona Creation"],
    "UnderstandingMarketAdoption": ["Innovation of Diffusion", "AARRR Pirate Metrics", "BCG Growth-Share Matrix", "Business Model Canvas", "Jobs to be Done", "Blue Ocean Strategy"],
    "AligningTeamRoles": ["DACI", "Product Team Competencies", "Product Squads", "North Star Framework", "The 3 Horizons Model", "Scrum Framework"],
    "LongtermPlanning": ["The 3 Horizons Model", "GIST Planning Cycle", "Business Model Canvas", "BCG Growth-Share Matrix", "Innovation of Diffusion", "Force Field Analysis"],
    "FosteringInnovation": ["The 3 Horizons Model", "Double Diamond", "Innovation of Diffusion", "Jobs to be Done", "Business Model Canvas", "Hook Model"],
    "DesignThinking": ["Double Diamond", "CIRCLES Method", "Kano Model", "Jobs to be Done", "AARRR Pirate Metrics", "Value Proposition Canvas"]
}


let frameworks = {
    "jobs_to_be_done": [
        {
            "title": "Jobs to be Done",
            "desc": "Understand the 'job' your product is hired for.",
            "content": "- Identify Customer: Start by identifying the target customer segment you aim to serve. For example, a fitness app might focus on 'busy professionals looking for 30-minute workouts'.\n- Define 'Job': Clearly define the core 'job' your product performs for the customer. For example, a food delivery app's job might be 'providing a convenient and fast way to enjoy a variety of foods'.\n- Conduct Interviews: Conduct qualitative interviews with potential or current customers to better understand their needs and pain points. For example, asking questions like 'What do you find most frustrating about current solutions in the market?'\n- Analyze Results: Systematically analyze the interview results to extract common themes or needs. For instance, if a majority mention the speed of service, that's a key area to focus on.\n- Iterate: Based on your findings, iterate on your product or service offering to better perform the 'job' customers hire it for. For example, if convenience is key, look into streamlining the user interface."
        }
    ],
    "kano_model": [
        {
            "title": "Kano Model",
            "desc": "Identify features that delight or dissatisfy users.",
            "content": "- List Features: Enumerate all potential features that your product could have. For a smartphone, this could range from battery life to camera quality.\n- Classify Features: Classify these features into categories like Basic Needs, Performance, and Delighters. For example, battery life might be a basic need, while a high-quality camera could be a Delighter.\n- Customer Survey: Conduct customer surveys to gauge the importance of each feature. For example, ask how disappointed customers would be without a certain feature.\n- Analyze Results: Use the survey data to identify which features are most impactful on customer satisfaction. For instance, if 80% of respondents rate a feature as a 'must-have', it's a high-priority item.\n- Prioritize Features: Finally, prioritize feature development based on their classification and customer feedback. For example, focus initially on 'Basic Needs' before moving onto 'Delighters'."
        }
    ],
    "rice_scoring_model": [
        {
            "title": "RICE Scoring Model",
            "desc": "Prioritize features based on Reach, Impact, Confidence, Effort.",
            "content": "- List Initiatives: Create a list of all potential initiatives, features, or changes you're considering. For example, for a blogging platform, options might include 'SEO optimization', 'commenting feature', and 'social media sharing'.\n- Score for Reach, Impact, Confidence, Effort: Assign a score for each initiative across four metrics: Reach, Impact, Confidence, and Effort. For instance, 'SEO optimization' might have high Reach and Impact but also require high Effort.\n- Calculate RICE Score: Multiply Reach, Impact, and Confidence, then divide by Effort to get the RICE score. For example, if Reach=10, Impact=8, Confidence=7, and Effort=5, then RICE score = (10*8*7)/5.\n- Prioritize: Prioritize the initiatives based on their RICE scores. Start with the highest RICE score and work your way down."
        }
    ],
    "north_star_framework": [
        {
            "title": "North Star Framework",
            "desc": "Align your team around the most important metric.",
            "content": "- Identify North Star Metric: Choose a metric that captures the core value your product delivers. Example: For a SaaS product, this could be Monthly Active Users.\n- Determine Inputs: Identify variables that influence the North Star Metric. Example: For an e-commerce site, variables could include page load time, inventory selection, and pricing.\n- Set Targets: Set numerical goals for your North Star Metric and its inputs. Example: Achieve 5% increase in Monthly Active Users within two months.\n- Track Progress: Monitor the metric and inputs regularly. Example: Set up a dashboard that tracks these numbers in real-time."
        }
    ],
    "product_squads": [
        {
            "title": "Product Squads",
            "desc": "Small, autonomous teams for agile development.",
            "content": "- Form Squads: Assemble small, cross-functional teams. Example: A squad could consist of a product manager, two developers, and a designer.\n- Define Objectives: Each squad defines its objectives aligned with company goals. Example: One squad could focus on user engagement, another on feature development.\n- Assign Tasks: Distribute tasks among squad members. Example: The developer could work on API integration while the designer focuses on UI.\n- Iterative Development: Work in sprints to develop, test, and deploy. Example: Use two-week sprints to build features.\n- Review: Assess progress and adapt. Example: During sprint reviews, discuss what worked and what didn\u2019t, and adapt accordingly."
        }
    ],
    "circles_method": [
        {
            "title": "CIRCLES Method",
            "desc": "A structured approach to answering product design questions.",
            "content": "- Comprehend Situation: Understand the current state and challenges. Example: Assess the market gap for a new fitness app.\n- Identify Customer: Identify the target customer segment. Example: Busy professionals looking for quick workouts.\n- Report Business Model: Outline how the business will make money. Example: Subscription-based revenue model.\n- Calculate Market Size: Estimate the potential market size. Example: Use data to approximate the number of potential users.\n- List Solution: List potential solutions to the problem identified. Example: Features like quick workout plans, reminders.\n- Evaluate Competition: Assess the competition in the market. Example: Compare features and pricing with existing fitness apps.\n- Summarize: Sum up the findings and propose next steps. Example: Recommend starting with a minimum viable product."
        }
    ],
    "business_model_canvas": [
        {
            "title": "Business Model Canvas",
            "desc": "A one-page overview of your business model.",
            "content": "- Customer Segments: Identify the different groups of people or businesses your company aims to serve. Example: For a retail business, segments might include online shoppers and in-store visitors.\n- Value Propositions: Pinpoint the unique value your product or service offers to customers. Example: Convenience, affordability, luxury.\n- Channels: Detail how your company delivers its product or service to customers. Example: Online store, physical locations, third-party retailers.\n- Customer Relationships: Describe the type of relationship your company has with its customers. Example: Self-service, personalized service, automated services.\n- Revenue Streams: Identify where your company makes money. Example: Sales, licensing, subscriptions.\n- Key Resources: List the critical assets required to operate and deliver value. Example: Manufacturing facilities, intellectual property, customer data.\n- Key Activities: Describe the crucial actions to create and deliver value. Example: Marketing, sales, product development.\n- Key Partnerships: Identify other organizations or services that help your business model work. Example: Suppliers, distributors, industry peers.\n- Cost Structure: List all costs associated with running your business. Example: Fixed costs, variable costs, economies of scale."
        }
    ],
    "product_team_competencies": [
        {
            "title": "Product Team Competencies",
            "desc": "Assess and enhance your product team's skills.",
            "content": "- Skill Assessment: Evaluate the skills within your product team. Example: Rate skills like market research, UX design, and technical expertise on a scale of 1-5.\n- Gap Analysis: Identify the skill gaps in the team. Example: Find out if you lack expertise in data analysis or user testing.\n- Training Plan: Develop a training plan to bridge the gaps. Example: Schedule workshops or online courses on data analysis.\n- Skill Matrix: Create a matrix to visualize the team's competencies. Example: Use a grid to plot expertise levels in various skills."
        }
    ],
    "weighted_scoring": [
        {
            "title": "Weighted Scoring",
            "desc": "Assign weights to different criteria for balanced decisions.",
            "content": "- Identify Criteria: List down the criteria to evaluate initiatives. Example: User impact, development effort, and business value.\n- Weight Assignment: Assign weights to each criterion based on importance. Example: User impact=50%, Development effort=30%, Business value=20%.\n- Score Initiatives: Score each initiative based on the criteria. Example: Initiative A gets 8 for User impact, 7 for Development effort.\n- Calculate Weighted Score: Calculate the weighted score for each initiative. Example: (8*0.5) + (7*0.3) for Initiative A.\n- Prioritize: Prioritize initiatives based on their weighted scores. Example: Focus on initiatives with the highest weighted scores first."
        }
    ],
    "gist_planning_cycle": [
        {
            "title": "GIST Planning Cycle",
            "desc": "Goals, Ideas, Steps, Tasks - for agile planning.",
            "content": "- Goals: Set overarching objectives for the product. Example: Increase user retention by 20% in 6 months.\n- Ideas: Brainstorm various ways to achieve the goals. Example: Implementing a loyalty program or enhancing user experience.\n- Steps: Break down the ideas into executable steps. Example: For a loyalty program, steps could include market research, design, and development.\n- Tasks: Assign specific tasks to team members. Example: Market research to be done by a product analyst."
        }
    ],
    "aarrr_pirate_metrics": [
        {
            "title": "AARRR Pirate Metrics",
            "desc": "Metrics for every stage of the customer lifecycle.",
            "content": "- Acquisition: Focus on getting new users. Example: Utilize social media marketing to attract new users.\n- Activation: Ensure new users take a desired action. Example: Use onboarding flows to guide new users to make a first purchase.\n- Retention: Keep users coming back. Example: Send personalized content or discounts.\n- Revenue: Monetize the active users. Example: Introduce a premium subscription model.\n- Referral: Encourage users to refer others. Example: Create a referral program offering benefits for both the referrer and referee."
        }
    ],
    "bcg_growth-share_matrix": [
        {
            "title": "BCG Growth-Share Matrix",
            "desc": "Portfolio management for business growth.",
            "content": "- Cash Cows: Identify low-growth, high-market-share products. Example: A well-established product that requires little investment.\n- Stars: Identify high-growth, high-market-share products. Example: A new product that is rapidly gaining market share.\n- Question Marks: Identify high-growth, low-market-share products. Example: Products that have potential but require significant investment.\n- Dogs: Identify low-growth, low-market-share products. Example: Products that might need to be phased out."
        }
    ],
    "rfm_model": [
        {
            "title": "RFM Model",
            "desc": "Recency, Frequency, Monetary value for customer segmentation.",
            "content": "- Recency: Measure how recently a customer made a purchase. Example: Use timestamps in transaction data.\n- Frequency: Count how often a customer makes a purchase. Example: Track the number of transactions over a set period.\n- Monetary: Calculate how much money a customer spends. Example: Sum the total value of all transactions."
        }
    ],
    "innovation_of_diffusion": [
        {
            "title": "Innovation of Diffusion",
            "desc": "Understand how innovations spread among users.",
            "content": "- Innovators: Target the earliest adopters of your product. Example: Tech-savvy individuals who are always looking for the latest gadgets.\n- Early Adopters: Focus on individuals who adopt new products but not as quickly as innovators. Example: Professionals who see the potential benefit of new technology.\n- Early Majority: Target the more cautious, but sizable portion of your market. Example: The general public who adopt a product once it has been validated by early adopters.\n- Late Majority: Focus on individuals who are skeptical of change but will eventually adopt it. Example: Older consumers who are hesitant but eventually see the benefit.\n- Laggards: The last to adopt a new product. Example: Those who only change when absolutely necessary."
        }
    ],
    "daci": [
        {
            "title": "DACI",
            "desc": "Driver, Approver, Contributor, Informed for decision making.",
            "content": "- Driver: The person who drives the project forward. Example: Product Manager.\n- Approver: The person who makes the final decision. Example: CEO or Business Head.\n- Contributor: Team members who will work on the project. Example: Developers, Designers.\n- Informed: Stakeholders who need to be kept in the loop but are not directly involved. Example: Marketing, Sales."
        }
    ],
    "the_3_horizons_model": [
        {
            "title": "The 3 Horizons Model",
            "desc": "Long-term growth and innovation strategy.",
            "content": "- Horizon 1: Focus on core business activities that generate immediate revenue. Example: Existing products or services.\n- Horizon 2: Focus on emerging opportunities that could generate future value. Example: New markets or technologies.\n- Horizon 3: Look at long-term possibilities that could reshape the industry. Example: Research and Development."
        }
    ],
    "double_diamond": [
        {
            "title": "Double Diamond",
            "desc": "A design process model for problem-solving.",
            "content": "- Discover: Start with a broad view of the problem. Example: Conduct user research or market analysis.\n- Define: Narrow down the problem into a clear statement. Example: Define the user pain points you want to solve.\n- Develop: Brainstorm and test solutions. Example: Create prototypes or mockups.\n- Deliver: Finalize the solution and launch. Example: Go through QA testing and release the product."
        }
    ],

"hook_model": [
    {
        "title": "Hook Model",
        "desc": "Creating user habits through loops of triggers, actions, rewards, and investments.",
        "content": "- Trigger: Identify what prompts the user to take action. Example: A notification alert.\n- Action: Define the action you want the user to take. Example: Opening the app.\n- Reward: Offer a reward for the action taken. Example: Getting a like on a post.\n- Investment: Encourage the user to invest time or resources. Example: Customizing a profile which makes the user more likely to return."
    }
],
"lean_canvas": [
    {
        "title": "Lean Canvas",
        "desc": "A 1-page business model for startups.",
        "content": "- Problem: List the top problems you're solving.\n- Solution: Propose possible solutions for each problem.\n- Key Metrics: Identify metrics to measure success.\n- Unique Value Proposition: Determine what sets you apart.\n- Channels: List where you'll reach your customers.\n- Cost Structure: Understand your costs.\n- Revenue Streams: Identify sources of income.\n- Unfair Advantage: What's something unique you have that others don't?\n- Customer Segments: Define your target users or businesses."
    }
],
"swot_analysis": [
    {
        "title": "SWOT Analysis",
        "desc": "Analyzing strengths, weaknesses, opportunities, and threats.",
        "content": "- Strengths: List what your product does well.\n- Weaknesses: Identify areas of improvement.\n- Opportunities: Spot external factors you can capitalize on.\n- Threats: Recognize external factors that could cause trouble."
    }
],
"agile_framework": [
    {
        "title": "Agile Framework",
        "desc": "Iterative and incremental approach to software development.",
        "content": "- Sprints: Work in 1-2 week cycles.\n- Daily Standups: Daily meetings to discuss progress.\n- Backlog: Prioritize tasks and features.\n- Sprint Review: Reflect on work completed.\n- Sprint Retrospective: Discuss what went well and what needs improvement."
    }
],
"user_story_mapping": [
    {
        "title": "User Story Mapping",
        "desc": "Visualize product functionality from a user's perspective.",
        "content": "- User Tasks: Identify main activities users will do.\n- Breakdown: Split tasks into detailed actions.\n- Prioritize: Decide the order of development based on importance.\n- Releases: Group tasks for different release versions."
    }
],
"five_whys": [
    {
        "title": "Five Whys",
        "desc": "Root cause analysis through iterative questioning.",
        "content": "- Define Problem: Clearly state the issue.\n- Ask Why: Question why the problem exists.\n- Drill Down: Continue asking why until the root cause is identified, usually by the fifth why."
    }
],
"product_roadmap": [
    {
        "title": "Product Roadmap",
        "desc": "Visualize the evolution of a product over time.",
        "content": "- Timeframe: Set short, medium, and long-term goals.\n- Features: List new functionalities and improvements.\n- Milestones: Mark significant events or releases.\n- Dependencies: Highlight if tasks depend on each other."
    }
],
"persona_creation": [
    {
        "title": "Persona Creation",
        "desc": "Build fictional characters to represent user types.",
        "content": "- Demographics: Age, gender, job, etc.\n- Behaviors: How they act, preferences.\n- Needs & Goals: What they aim to achieve.\n- Pain Points: Challenges or problems they face."
    }
],
"feature_prioritization": [
    {
        "title": "Feature Prioritization",
        "desc": "Decide on what features to build next.",
        "content": "- List Features: Detail all potential functionalities.\n- Value vs. Complexity: Rate each feature based on its value to users vs. development complexity.\n- User Feedback: Consider what users are requesting.\n- Business Impact: Reflect on potential ROI or alignment with company strategy."
    }
],
"value_proposition_canvas": [
    {
        "title": "Value Proposition Canvas",
        "desc": "Understand how your product fulfills user needs.",
        "content": "- Customer Profile: Detail jobs, pains, and gains of your target user.\n- Value Map: List features, benefits, and the value your product offers.\n- Fit: Identify where features of your product align with user needs."
    }
],
"scrum_framework": [
    {
        "title": "Scrum Framework",
        "desc": "An agile process framework for iterative development.",
        "content": "- Roles: Product owner, Scrum master, Development team.\n- Ceremonies: Sprint planning, Daily standup, Sprint review, Retrospective.\n- Artifacts: Product backlog, Sprint backlog, Increment."
    }
],
"blue_ocean_strategy": [
    {
        "title": "Blue Ocean Strategy",
        "desc": "Create uncontested market space and make competition irrelevant.",
        "content": "- Eliminate: Decide what industry takes for granted should be eliminated.\n- Reduce: Identify which factors should be reduced below industry standards.\n- Raise: Determine which factors should be raised above industry standards.\n- Create: Find out what should be created that industry has never offered."
    }
],
"feature_matrix": [
    {
        "title": "Feature Matrix",
        "desc": "Compare features across multiple products or versions.",
        "content": "- List Features: Enumerate all potential functionalities.\n- Compare Products: Rate each product based on the presence or absence of each feature.\n- User Preferences: Take into account the features most desired by users.\n- Versioning: Use the matrix to differentiate product versions or tiers."
    }
],
"product_lifecycle": [
    {
        "title": "Product Lifecycle",
        "desc": "Understand the stages a product goes through from introduction to decline.",
        "content": "- Introduction: Launch and introduction to market.\n- Growth: Rapid increase in sales and user adoption.\n- Maturity: Sales stabilize and competition intensifies.\n- Decline: Sales drop, possibly due to new innovations or changing market conditions."
    }
],
"force_field_analysis": [
    {
        "title": "Force Field Analysis",
        "desc": "Analyze driving and restraining forces for change in a project.",
        "content": "- Driving Forces: Factors that push for change or progress.\n- Restraining Forces: Factors that hinder or resist change.\n- Balance: Weigh the driving vs. restraining forces to decide if change is feasible or how to make it more so."
    }
]
}
// Listen for dropdown changes and show frameworks

document.addEventListener('DOMContentLoaded', function() {
    // Check if the form has been previously displayed using chrome.storage.local
    chrome.storage.local.get(['tallyFormDisplayed'], function(result) {
        
        let formDisplayed = result.tallyFormDisplayed;

        if (formDisplayed) {
            // If the form was previously displayed, we'll show the main content
            document.getElementById("tallyFormDiv").style.display = 'none';
            document.getElementById("mainContent").style.display = 'block';
        } else {
            // If the form wasn't displayed before, show the form and the instruction
            document.getElementById("tallyFormDiv").style.display = 'block';
            // Set the form displayed flag using chrome.storage.local
            chrome.storage.local.set({'tallyFormDisplayed': true});
        }
    });
});




document.getElementById('problemDropdown').addEventListener('change', function() {
    const selectedProblem = this.value;
    document.getElementById('tutorial').style.display = 'block';
    displayFrameworks(selectedProblem);
});

function displayFrameworks(problem) {
    const container = document.querySelector('.info-card');
    container.style.display = 'block';
    document.querySelector('.empty-image').style.display='none';
    container.innerHTML = ''; // Clear existing cards

    const linkedFrameworks = problemsFrameworksLink[problem] || [];
    
    linkedFrameworks.forEach(frameworkTitle => {
        const frameworkKey = frameworkTitle.replace(/\s+/g, '_').toLowerCase();
        const frameworkDetails = frameworks[frameworkKey] && frameworks[frameworkKey][0];

        if (frameworkDetails) {
            const card = document.createElement('div');
            card.className = 'framework-card';

            const title = document.createElement('div');
            title.className = 'framework-title';
            title.textContent = frameworkDetails.title;
            card.appendChild(title);
            const copyButton = document.createElement('button');
            copyButton.className = 'framework-btn';
            copyButton.textContent = 'Use Framework';
            copyButton.addEventListener('click', function() {
                copyToClipboard(frameworkDetails.content);
                showToast("Framework content copied!");

            });
            title.appendChild(copyButton);

            const desc = document.createElement('div');
            desc.className = 'framework-desc';
            desc.textContent = frameworkDetails.desc;
            card.appendChild(desc);
            container.appendChild(card);
        }
    });
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}


function showToast(message) {
    // Check if a toast is already displayed and remove it if so
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        document.body.removeChild(existingToast);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    document.body.appendChild(toast);
    setTimeout(() => {
        // Before removing, check if it still exists (in case another toast was shown and this one was removed)
        if (document.body.contains(toast)) {
            document.body.removeChild(toast);
        }
    }, 3000); // The toast will be removed after 3 seconds
}


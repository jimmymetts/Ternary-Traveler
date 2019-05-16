
const inputBuilder = {
 inputForm() {
// let dom = document.querySelector("#formContent")
// let entriesContainer = document.createElement("div")
let fieldInterest = document.createElement("fieldset")
let interestInput = document.createElement("article")             /* div for input forms */
let pointOfInterestInput = document.createElement("input");
       setAttributes(pointOfInterestInput, {
           type: "text",
           id: "poInterest"
       })
    pointOfInterestInput.setAttribute("for", "pointOfInterestName")
    pointOfInterestInput.setAttribute("id", "poInterest")
    pointOfInterestInput.setAttribute("class", "poInterest")
    pointOfInterestInput.setAttribute("name", "poInterest")
    pointOfInterestInput.placeholder = "Point of Interest";

    let body = document.querySelector(".formContent")

    fieldInterest.appendChild(interestInput)
    fieldInterest.appendChild(pointOfInterestInput)
    body.appendChild(fieldInterest)

    let fieldDescription = document.createElement("fieldset")
let DescriptionInput = document.createElement("article")             /* div for input forms */
let pointOfDescriptionInput = document.createElement("input");
       setAttributes(pointOfDescriptionInput, {
           type: "text",
           id: "poDescription"
       })
    pointOfDescriptionInput.setAttribute("for", "pointOfDescriptionName")
    pointOfDescriptionInput.setAttribute("id", "poDescription")
    pointOfDescriptionInput.setAttribute("class", "poDescription")
    pointOfDescriptionInput.setAttribute("name", "poDescription")
    pointOfDescriptionInput.placeholder = "Point of Description";

    let descriptionForm = document.querySelector(".formContent")

    fieldDescription.appendChild(DescriptionInput)
    fieldDescription.appendChild(pointOfDescriptionInput)
    descriptionForm.appendChild(fieldDescription)

    let fieldCost = document.createElement("fieldset")
let CostInput = document.createElement("article")             /* div for input forms */
let pointOfCostInput = document.createElement("input");
       setAttributes(pointOfCostInput, {
           type: "text",
           id: "poCost"
       })
    pointOfCostInput.setAttribute("for", "pointOfCostName")
    pointOfCostInput.setAttribute("id", "poCost")
    pointOfCostInput.setAttribute("class", "poCost")
    pointOfCostInput.setAttribute("name", "poCost")
    pointOfCostInput.placeholder = "Point of Cost";

    let CostForm = document.querySelector(".formContent")

    fieldCost.appendChild(CostInput)
    fieldCost.appendChild(pointOfCostInput)
    CostForm.appendChild(fieldCost)

    let fieldReview = document.createElement("fieldset")
    let ReviewInput = document.createElement("article")             /* div for input forms */
    let pointOfReviewInput = document.createElement("input");
           setAttributes(pointOfReviewInput, {
               type: "text",
               id: "poReview"
           })
        pointOfReviewInput.setAttribute("for", "pointOfReviewName")
        pointOfReviewInput.setAttribute("id", "poReview")
        pointOfReviewInput.setAttribute("class", "poReview")
        pointOfReviewInput.setAttribute("name", "poReview")
        pointOfReviewInput.placeholder = "Point of Review";

        let ReviewForm = document.querySelector(".formContent")

        fieldReview.appendChild(ReviewInput)
        fieldReview.appendChild(pointOfReviewInput)
        ReviewForm.appendChild(fieldReview)


// let descriptionInput = document.createElement("input")
// let poiCost =document.createElement("input")
// let saveButton = document.createElement("button")
// saveButton.innerText = "save"
// saveButton.classList.add("saveBtn")

// descriptionInput.classList.add("description")
// poiCost.classList.add("cost")
// entriesContainer.appendChild(interestName)            /* */
// entriesContainer.appendChild(descriptionInput)
// entriesContainer.appendChild(poiCost)
// entriesContainer.appendChild(saveButton)
// dom.appendChild(entriesContainer)                        /* connects to index */
    }
}
function setAttributes(domElement, attributeObject) {
    for (const key in attributeObject) {
        if (attributeObject.hasOwnProperty(key)) {
            const value = attributeObject[key];
            domElement.setAttribute(key, value);
        }
    }
 }
export default inputBuilder


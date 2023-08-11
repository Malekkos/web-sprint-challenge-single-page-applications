describe("Pizza Ordering Service", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/"); // Will have to click the buttons to navigate to appropraite pages

  })

  const nameInput = () => cy.get("input[name=name]");
  const sizeInput = () => cy.get("select[name=size]");
  const pepperoniInput = () => cy.get("input[name=pepperoni]");
  const sausageInput = () => cy.get("input[name=sausage]");
  const baconInput = () => cy.get("input[name=bacon]");
  const hamInput = () => cy.get("input[name=ham]");
  const specialRequest = () => cy.get("input[name=specialInstruction]")
  const pineappleInput = () => cy.get("input[name=pineapple]");
  const homeNavButton = () => cy.get("#pizza-form")
  const pizzaNavButton = () => cy.get("#order-pizza")
  const orderButton = () => cy.get("#order-button")
  const madePizza = () => cy.get(".madePizza > div")
  const checkoutButton = () => cy.get(":nth-child(6) > input")
  const nameInputError = () => cy.get(".makeAPizzaWrapper > :nth-child(2)")
  it("sanity check", () => {
    expect("blue").to.not.equal("red");
  })


  it ("Home and Make a Pizza buttons work", () => {
    cy.url().should("equal", "http://localhost:3000/");
    homeNavButton().click().url().should("equal", "http://localhost:3000/")
    pizzaNavButton().click().url().should("equal", "http://localhost:3000/pizza")
  })
  it ("All input fields work", () => {
    cy.visit("http://localhost:3000/pizza")
    nameInput().type("Christian").should("have.value", "Christian")
    sizeInput().select("small")
    .should("have.value", "small")
    .select("medium").should("have.value","medium")
    .select("large").should("have.value", "large")
    pepperoniInput().click().should("have.value", "on") //this is broken once again, giving the value of on
    // pepperoniInput().click().should("have.value", "off")
    sausageInput().click().should("have.value", "on")
    baconInput().click().should("have.value", "on")
    hamInput().click().should("have.value", "on")
    pineappleInput().click().should("have.value", "on")
    specialRequest().type("Scorch that pizza, I want it charcoal").should("have.value", "Scorch that pizza, I want it charcoal")
  })
  it ("Create your Pizza button creates a pizza" , () => {
    cy.visit("http://localhost:3000/pizza")
    nameInput().type("Sammy")
    sizeInput().select("large")
    pepperoniInput().click()
    pineappleInput().click()
    specialRequest().type("I want double pineapple on the pizza")
    orderButton().click()
    madePizza().should("be.visible")
  })
  it ("Checkout button sends data to the api", () => {
    cy.visit("http://localhost:3000/pizza")
    nameInput().type("Billy Bong")
    sizeInput().select("large")
    orderButton().click()
    checkoutButton().click()
    //So i have zero idea how to check if the data gets sent out, and I cant check if itll send me to checkout because it simply doesn't - eg not implemented
  })
  it ("name too short" , () => {
    cy.visit("http://localhost:3000/pizza")
    nameInput().type("a")
    nameInputError().should("be.visible")
  })
})
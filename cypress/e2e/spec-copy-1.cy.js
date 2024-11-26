describe('template spec', () => {
  it('passes', () => {

    //test visiting site
    cy.visit('https://watch-vault.netlify.app/')
    cy.get(".primary-button").contains("New Movie +").click();
  })

  //testing creating a new movie
  it("Go to the button New Movie + and create a new movie", () => {
    cy.visit('https://watch-vault.netlify.app/')
    cy.get(".primary-button").contains("New Movie +").click();
    cy.get('input[name="title"]').type('Twisters');
    cy.get('input[id="watched"]').check();
    cy.get('input[id="watched"]').uncheck();
    cy.get('input[id="watched"]').check();
    cy.get('input[id="release_date"]').type('2024-07-19');
    cy.get('input[id="rotten_tomatoes"]').type('89').get('input[id="audience_rating"]').type('85');
    cy.get('input[value="Action"]').check()
    cy.get('input[value="Thriller"]').check();
    cy.get('textarea[id="description"]').type('A sequel to the 1996 blockbuster Twister, the story follows Kate Carter (played by Daisy Edgar-Jones), a former storm chaser haunted by a tragic encounter with a tornado. Now working in New York, she is drawn back to the storm-filled plains by her friend Javi (Anthony Ramos) to test a groundbreaking weather-tracking system. There, she encounters Tyler Owens (Glen Powell), a daring social media storm chaser. As multiple powerful storms converge over Oklahoma, the group faces unparalleled challenges in their fight for survival.');
    cy.get("#image").type(
      "https://m.media-amazon.com/images/I/81VqUxKisOL.jpg",
      { force: true } //you cannot see the image input section on smaller viewscreens. Therefor, it is impossible for the user to input an image url. That is why we must add the force.
    );
    cy.get(".primary-button").contains("Save").click();
    cy.wait(3000);
  })

  //test editing a movie
  it("Go to Twisters movie and edit it", () => {
    cy.visit('https://watch-vault.netlify.app/')
    cy.get(".search-bar-input").type("Twisters");
    cy.get(".movie-card").contains("TWISTERS").click();
    cy.get(".primary-button").contains("Edit").click();
    cy.get('input[name="rotten_tomatoes"]').clear().type('92').get('input[name="audience_rating"]').clear().type('72');
    cy.get('input[value="Drama"]').check();
    cy.get(".primary-button").contains("Save").click();
    cy.wait(3000);
  })

  //test deleting a movie
  it("Go to Twisters movie and delete it", () => {
    cy.visit('https://watch-vault.netlify.app/')
    cy.get(".search-bar-input").type("Twisters");
    cy.get(".movie-card").contains("TWISTERS").click(); //in the movie card component we have it set to .toUpperCase must be exact in the testing in order to work
    cy.get("button").contains("Delete").click();
    cy.get("button").contains("Delete").click();

  })

  

})


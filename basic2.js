/** To create a test in JS wdio we start with describe methos which will take two arguments
*The title of the suite and function
*it key word will take two arguments as well, the test title and function just like below...
*Promise to execute any step, sync to make the execution run sequencially
*/
describe('Ecommerce App', async ()=>{

    it('Login', async()=>{
        //wdio
      await  browser.ur("")
      await  browser.getTitle()
    })
})
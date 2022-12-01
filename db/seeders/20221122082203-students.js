const path = require('path');
const fs = require('fs/promises');

module.exports = {
  async up(queryInterface, Sequelize) {
    const students = (await fs.readFile(path.join(__dirname, './students.txt'), 'utf-8'))
      .trim()
      .split('\n')
      .map((el) => el.split('\t'))
      .map((el) => ({
        name: el[0],
        git: el[2].slice(el[2].lastIndexOf('/') + 1),
        createdAt: new Date(),
        updatedAt: new Date(),
      }));

    console.log(students);
    /**
     * Add seed commands here.
     *
     * Example:
      await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    await queryInterface.bulkInsert('Students', students, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

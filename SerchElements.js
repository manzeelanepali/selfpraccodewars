const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
];

const topStudent = students.find((student) => student.grade >= 90);

console.log(topStudent);

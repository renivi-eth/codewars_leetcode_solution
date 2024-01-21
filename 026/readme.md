There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Важный
Пожалуйста, посмотрите примеры и пояснения ниже, чтобы убедиться, что вы правильно поняли задачу :)

Примеры
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Разъяснения
Существует только ОДНА очередь, обслуживающая множество касс, и
Порядок очереди НИКОГДА не меняется, и
Первый человек в очереди (т. е. первый элемент в массиве/списке) переходит к кассе, как только она становится свободной.
Н.Б. Вы должны предполагать, что все тестовые входные данные будут действительными, как указано выше.

P.S. Ситуацию в этом ката можно сравнить с идеей пула потоков, более связанной с компьютерной наукой, в отношении одновременного запуска нескольких процессов: https://en.wikipedia .org/wiki/Thread_pool

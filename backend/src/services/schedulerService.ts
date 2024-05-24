import cron from "node-cron";
import Task from "../models/taskModel";

const scheduleTask = async () => {
  const tasks = await Task.find({ executed: false });
  tasks.forEach((task) => {
    if (task.recurring && task.cronExpression) {
      cron.schedule(task.cronExpression, async () => {
        await Task.findByIdAndUpdate(task._id, { executed: true });
        console.log(`Task ${task.name} executed at ${new Date()}`);
      });
    } else if (
      task.executeAt &&
      new Date(task.executeAt).getTime() - Date.now() < 10000
    ) {
      setTimeout(async () => {
        await Task.findByIdAndUpdate(task._id, { executed: true });
        console.log(`Task ${task.name} executed at ${new Date()}`);
      }, new Date(task.executeAt).getTime() - Date.now());
    }
  });
};

export default scheduleTask;

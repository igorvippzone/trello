-- DropForeignKey
ALTER TABLE "pomodoro_round" DROP CONSTRAINT "pomodoro_round_pomodoro_session_id_fkey";

-- DropForeignKey
ALTER TABLE "pomodoro_session" DROP CONSTRAINT "pomodoro_session_user_id_fkey";

-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_user_id_fkey";

-- DropForeignKey
ALTER TABLE "time_block" DROP CONSTRAINT "time_block_user_id_fkey";

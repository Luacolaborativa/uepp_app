import ContentHeader from "../components/ContentHeader";
import TaskCard from "./taskCard";

export default function TasksPage() {
    return (
        <div>
            <ContentHeader title='Tarefas' subtitle='Gerencie suas tarefas diárias, semanais, e mensais aqui.' />
            <section className="bg-slate-200 rounded-lg grid grid-cols-3 grid-flow-col p-3">
                <TaskCard />
            </section>
        </div>
    );
}

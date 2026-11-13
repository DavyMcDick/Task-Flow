function StatCard({ title, value}) {
    return(
        <div classnName="stat-card">
           <h3>{title}</h3>
           <h3>{value}</h3>
        </div>
    );
}

export default StatCard;
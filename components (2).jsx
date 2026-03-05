// React component — availability badge shown on hero
function AvailableBadge() {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', marginTop:'1.2rem',
      padding:'0.45rem 1rem', background:'rgba(200,169,110,0.12)', border:'1px solid rgba(200,169,110,0.3)',
      borderRadius:'20px', fontSize:'0.8rem', color:'#c8a96e', cursor:'pointer' }}
      onClick={() => setOpen(false)}>
      <span style={{ width:7, height:7, borderRadius:'50%', background:'#c8a96e', display:'inline-block',
        animation:'pulse 1.5s infinite' }}></span>
      Available for projects &nbsp;✕
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
    </div>
  );
}

const mount = document.getElementById('react-badge');
if (mount) ReactDOM.createRoot(mount).render(<AvailableBadge />);

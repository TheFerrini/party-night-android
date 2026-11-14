import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

type BoundaryState = { error: Error | null };
class AppErrorBoundary extends React.Component<React.PropsWithChildren, BoundaryState> {
  state: BoundaryState = { error: null };
  static getDerivedStateFromError(error: Error): BoundaryState { return { error }; }
  componentDidCatch(error: Error, info: React.ErrorInfo) { console.error('Party Night ha fallat durant l’arrencada o el renderitzat.',error,info); }
  render() {
    if (this.state.error) {
      const details=this.state.error.stack||this.state.error.message||String(this.state.error);
      return <main style={{minHeight:'100dvh',boxSizing:'border-box',padding:'32px 22px',background:'#090a12',color:'#fff',fontFamily:'system-ui,sans-serif',display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <div style={{width:'100%',maxWidth:480,margin:'0 auto'}}>
          <div style={{fontSize:42,marginBottom:18}}>⚠️</div>
          <h1 style={{fontSize:26,margin:'0 0 10px'}}>Party Night no s’ha pogut iniciar</h1>
          <p style={{color:'#aab0c0',lineHeight:1.5}}>S’ha produït un error en carregar la interfície. Les dades desades no s’han esborrat. Pots copiar aquest missatge per compartir-lo.</p>
          <pre style={{whiteSpace:'pre-wrap',overflowWrap:'anywhere',padding:14,borderRadius:12,background:'#171a27',color:'#fca5a5',fontSize:11,maxHeight:'34dvh',overflow:'auto'}}>{details}</pre>
          <button onClick={()=>window.location.reload()} style={{width:'100%',border:0,borderRadius:12,padding:'15px 18px',background:'#7c3aed',color:'#fff',fontWeight:800,fontSize:15}}>Torna-ho a provar</button>
        </div>
      </main>;
    }
    return this.props.children;
  }
}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><AppErrorBoundary><App /></AppErrorBoundary></React.StrictMode>);

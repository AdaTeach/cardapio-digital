import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CadastroProduto } from './CadastroProduto'
import { ListarMesas } from './ListaMesas'
import { FormularioEdicaoMesa } from './FormularioEdicaoMesa'
import { FormularioCadastroMesa } from './FormularioCadastroMesa'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/produtos" element={<CadastroProduto />} />
                <Route path="/mesa" element={<ListarMesas />} />
                <Route path="/mesa/cadastro" element={<FormularioCadastroMesa />} />
                <Route path="/mesa/:id/editar" element={<FormularioEdicaoMesa />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

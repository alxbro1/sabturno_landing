# POLÍTICA DE PRIVACIDAD DE  sabturno

**Última actualización:** 13 de diciembre de 2025
**Versión:** 1.1

## INTRODUCCIÓN

Alexander Sauro ("nosotros", "nuestro" o "nos") opera la aplicación móvil  sabturno (la "Aplicación"). Esta página le informa sobre nuestras políticas con respecto a la recopilación, uso y divulgación de datos personales cuando utiliza nuestra Aplicación y las opciones que tiene asociadas con esos datos.

Utilizamos sus datos para proporcionar y mejorar la Aplicación. Al utilizar la Aplicación, usted acepta la recopilación y el uso de información de acuerdo con esta política.

## INFORMACIÓN QUE RECOPILAMOS

### 1. INFORMACIÓN PROPORCIONADA POR USTED

#### 1.1 Información de Registro
Cuando crea una cuenta en  sabturno, recopilamos:
- **Nombre completo**
- **Dirección de correo electrónico**
- **Número de teléfono**
- **Edad** (para verificar que tiene 13+ años)
- **Tipo de cuenta** (Cliente o Negocio)
- **Contraseña** (almacenada de forma cifrada)

#### 1.2 Información Adicional para Negocios
Los negocios deben proporcionar:
- Nombre legal del negocio
- Dirección física del establecimiento
- Certificado de monotributo (en fase de lanzamiento público)
- Fotografías del local y trabajos realizados
- Servicios ofrecidos y precios
- Horarios de atención

#### 1.3 Información de Perfil Opcional
- Fotografía de perfil

#### 1.4 Información de Reservas
- Servicios seleccionados
- Fechas y horarios de citas
- Historial de reservas
- Estado de las citas (confirmada, cancelada, completada)

#### 1.5 Reseñas y Calificaciones (Cuando se Implemente)
- Texto de reseñas escritas
- Calificaciones en estrellas
- Fecha de la reseña

**IMPORTANTE:** Los clientes NO pueden subir fotografías en las reseñas. Solo texto y calificaciones.

### 2. INFORMACIÓN RECOPILADA AUTOMÁTICAMENTE

#### 2.1 Datos de Uso de la Aplicación
- Fecha y hora de acceso
- Funcionalidades utilizadas
- Tiempo de uso de la aplicación
- Páginas visualizadas
- Acciones realizadas (búsquedas, reservas, etc.)

#### 2.2 Información del Dispositivo
- Modelo del dispositivo
- Sistema operativo y versión
- Identificador único del dispositivo
- Versión de la aplicación
- Idioma del dispositivo
- Zona horaria

#### 2.3 Datos Técnicos
- Dirección IP
- Tipo de conexión (WiFi, datos móviles)
- Proveedor de servicios de Internet
- Registros de errores y fallos (crash logs)

### 3. INFORMACIÓN QUE NO RECOPILAMOS

**En la versión de prueba actual:**
- **NO recopilamos datos de ubicación GPS** (se implementará en futuras versiones)
- **NO rastreamos su ubicación**
- **NO accedemos a su ubicación en segundo plano**
- **NO recopilamos contactos de su teléfono**
- **NO accedemos a sus mensajes o llamadas**
- **NO recopilamos datos de otras aplicaciones**
- **NO usamos tecnologías de fingerprinting del dispositivo**
- **NO instalamos cookies de terceros**
- **NO compartimos datos con redes publicitarias**

**En futuras versiones:**
- Podremos solicitar permiso de ubicación SOLO cuando use la función de búsqueda
- El permiso será completamente opcional
- Solo usaremos ubicación para calcular distancias (procesamiento local)
- NO almacenaremos historial de ubicaciones
- NO rastrearemos sus movimientos
- NO usaremos ubicación en segundo plano

## PERMISOS DE LA APLICACIÓN

### PERMISOS ACTUALES (Fase de Prueba)

#### Cámara
- **Por qué lo necesitamos:** Para tomar fotos de perfil o galería del negocio
- **Cuándo se solicita:** Solo cuando el usuario elige tomar una foto
- **Quién puede usarlo:** Todos los usuarios (obligatorio para negocios que quieran galería)
- **Se puede denegar:** Sí, puede usar fotos existentes de la galería
- **Acceso en segundo plano:** NO
- **Datos que se guardan:** Solo las fotos que usted toma y decide subir
- **Cómo controlarlo:** Configure en Ajustes > Aplicaciones > sabturno > Permisos > Cámara

#### Galería de Fotos / Almacenamiento
- **Por qué lo necesitamos:** Para seleccionar fotos existentes para perfil o galería del negocio
- **Cuándo se solicita:** Solo cuando el usuario elige seleccionar una foto
- **Acceso:** Solo a las fotos que usted selecciona específicamente (no accedemos a toda la galería)
- **Se puede denegar:** Sí, puede usar la cámara en su lugar
- **Tipos de archivo aceptados:** JPEG, JPG, PNG, WebP, GIF
- **Tamaño máximo:** 10MB por imagen
- **Cómo controlarlo:** Configure en Ajustes > Aplicaciones > sabturno > Permisos > Archivos y multimedia

#### Notificaciones Push
- **Por qué lo necesitamos:** Para enviar confirmaciones de citas y recordatorios
- **Cuándo se solicita:** Al instalar la aplicación o al crear la primera reserva
- **Tipos de notificaciones:**
  - Confirmación de cita reservada
  - Recordatorio 24 horas antes de la cita
  - Notificación de cancelación
  - Cambios en la cita por parte del negocio
  - Actualizaciones importantes de la aplicación
- **Frecuencia:** Solo para eventos importantes (no spam)
- **Se puede denegar:** Sí, pero no recibirá recordatorios importantes
- **Cómo controlarlo:** Configure en Ajustes > Aplicaciones > sabturno > Notificaciones

#### Almacenamiento Local
- **Por qué lo necesitamos:** Para guardar información de sesión y mejorar rendimiento
- **Qué guardamos localmente:**
  - Token JWT de autenticación (cifrado)
  - Preferencias de la aplicación
  - Caché temporal de datos (perfil, búsquedas recientes)
- **Duración:** Token válido por 30 días o hasta cerrar sesión
- **Cómo se elimina:** Automáticamente al desinstalar la aplicación o cerrar sesión
- **Tamaño aproximado:** Menos de 5MB

#### Internet (Conexión de Red)
- **Por qué lo necesitamos:** Para comunicarse con nuestros servidores
- **Obligatorio:** Sí, la aplicación NO funciona offline
- **Qué datos se transmiten:**
  - Solicitudes de búsqueda
  - Creación y gestión de citas
  - Carga y descarga de imágenes
  - Autenticación de usuario
- **Cifrado:** Todas las comunicaciones usan HTTPS/TLS
- **Se puede denegar:** No, es esencial para el funcionamiento

### PERMISOS FUTUROS (Próximas Versiones)

#### Ubicación (GPS/Red) - OPCIONAL
- **Por qué lo solicitaremos:** Para mostrar negocios cercanos a su ubicación
- **Tipo de ubicación:**
  - Aproximada (nivel de ciudad): Para búsqueda general
  - Precisa (GPS): Para búsqueda por cercanía exacta
- **Cuándo se usa:** SOLO cuando activamente usa la función de búsqueda
- **Uso en segundo plano:** NO, nunca rastreamos ubicación en segundo plano
- **Almacenamiento:** NO guardamos historial de ubicaciones
- **Procesamiento:** Cálculo de distancias se hace localmente en su dispositivo
- **Se comparte con terceros:** NO
- **Puede usarse sin este permiso:** SÍ, totalmente opcional
- **Cómo controlarlo:** Configure en Ajustes > Aplicaciones > sabturno > Permisos > Ubicación

### RESUMEN DE PERMISOS

| Permiso | Estado Actual | ¿Obligatorio? | ¿Segundo Plano? |
|---------|---------------|---------------|------------------|
| Cámara | Activo | No | No |
| Galería | Activo | No | No |
| Notificaciones | Activo | No* | No |
| Almacenamiento | Activo | Sí | No |
| Internet | Activo | Sí | Sí** |
| Ubicación | Futuro | No | No |

*Recomendado para recibir recordatorios  
**Solo cuando la app está abierta o sincronizando

## CÓMO USAMOS SU INFORMACIÓN

Utilizamos la información recopilada para:

### 1. PROPORCIONAR EL SERVICIO
- Crear y gestionar su cuenta
- Facilitar la reserva de citas
- Conectar clientes con negocios de belleza
- Mostrar información de negocios y servicios
- Enviar confirmaciones y recordatorios de citas
- Gestionar el historial de servicios

### 2. PROCESAR TRANSACCIONES (Futuro)
- Procesar pagos a través de Mercado Pago
- Gestionar reembolsos y cancelaciones
- Generar recibos y comprobantes

### 3. MEJORAR LA APLICACIÓN
- Analizar patrones de uso
- Identificar y corregir errores
- Optimizar la experiencia del usuario
- Desarrollar nuevas funcionalidades

### 4. COMUNICARNOS CON USTED
- Enviar notificaciones sobre sus citas
- Informar sobre cambios en el servicio
- Responder a consultas de soporte
- Enviar actualizaciones importantes (nunca spam)

### 5. SEGURIDAD Y PREVENCIÓN DE FRAUDE
- Detectar y prevenir actividades fraudulentas
- Proteger contra usos no autorizados
- Hacer cumplir nuestros Términos y Condiciones
- Verificar la identidad de usuarios y negocios

### 6. CUMPLIMIENTO LEGAL
- Cumplir con obligaciones legales
- Responder a solicitudes legales válidas
- Proteger nuestros derechos legales

## COMPARTIR SU INFORMACIÓN

### CON QUIÉN COMPARTIMOS

#### 1. Negocios Asociados
**Qué compartimos:**
- Nombre del cliente
- Número de teléfono
- Servicio solicitado
- Fecha y hora de la cita

**Por qué:** Para que puedan cumplir con la reserva

#### 2. Procesadores de Pago (Mercado Pago - Futuro)
**Qué compartimos:**
- Información necesaria para procesar el pago
- **NO almacenamos datos de tarjetas en nuestros servidores**

**Por qué:** Para procesar pagos de forma segura

#### 3. Proveedores de Servicios
**Qué compartimos:**
- Datos técnicos necesarios para operar la plataforma

**Quiénes:**
- Servicios de hosting de servidores
- Servicios de almacenamiento en la nube
- Herramientas de análisis de errores

**Obligación:** Todos nuestros proveedores están obligados contractualmente a proteger su información

#### 4. Autoridades Legales
**Cuándo:**
- Cuando sea legalmente requerido
- Para cumplir con un proceso legal
- Para proteger nuestros derechos o seguridad

#### 5. Otros Usuarios (Información Pública)
**Qué es visible:**
- Nombre (sin apellido) en reseñas publicadas
- Contenido de reseñas y calificaciones
- Foto de perfil (si la configuró como pública)

### CON QUIÉN NO COMPARTIMOS

- **NO vendemos sus datos personales a terceros**
- **NO compartimos datos con anunciantes**
- **NO alquilamos listas de correo o teléfono**

## ALMACENAMIENTO Y SEGURIDAD DE DATOS

### 1. UBICACIÓN DE LOS SERVIDORES

Sus datos se almacenan en las siguientes ubicaciones:

#### Servidores Principales
- **Ubicación:** Argentina
- **Tipo de datos:** Información de cuenta, reservas, base de datos principal
- **Proveedor:** Servicios de hosting seguros con certificaciones de seguridad

#### Almacenamiento en la Nube (AWS S3)
- **Ubicación:** Estados Unidos
- **Tipo de datos:** Imágenes de perfil y galería de negocios
- **Proveedor:** Amazon Web Services (AWS)
- **Seguridad:** Acceso controlado, URLs firmadas temporales (válidas 5 minutos)
- **Cumplimiento:** AWS cumple con estándares internacionales de seguridad

#### Transferencia Internacional
Al usar la aplicación desde fuera de Argentina, usted consiente explícitamente la transferencia de sus datos a:
- Argentina (servidor principal)
- Estados Unidos (almacenamiento de imágenes AWS)

**Salvaguardas implementadas:**
- Cifrado en tránsito y en reposo
- Contratos de procesamiento de datos con proveedores
- Cumplimiento con mejores prácticas de seguridad
- Auditorías de seguridad periódicas

### 2. MEDIDAS DE SEGURIDAD TÉCNICAS

Implementamos múltiples capas de seguridad:

#### Cifrado de Datos
- **Contraseñas:** Cifradas usando bcrypt con 10 salt rounds (estándar de la industria)
- **Comunicaciones:** HTTPS/TLS 1.2 o superior para todas las conexiones
- **Tokens de sesión:** JWT firmados y cifrados
- **Datos en reposo:** Base de datos con cifrado a nivel de disco

#### Control de Acceso
- **Autenticación:** Sistema de autenticación basado en tokens JWT
- **Autorización:** Verificación de permisos en cada solicitud
- **Acceso administrativo:** Restringido a personal esencial con autenticación de dos factores
- **Principio de mínimo privilegio:** Solo acceso necesario para cada función

#### Protección de Imágenes
- **URLs firmadas:** Acceso temporal a imágenes (expiración de 5 minutos)
- **Validación de archivos:** Verificación de tipo y tamaño de archivo
- **Escaneo de malware:** Imágenes escaneadas antes de almacenar
- **Límite de tamaño:** Máximo 10MB por imagen

#### Monitoreo y Respuesta
- **Logs de seguridad:** Registros de acceso conservados por 90 días
- **Detección de anomalías:** Alertas automáticas de actividad sospechosa
- **Respuesta a incidentes:** Protocolo establecido para brechas de seguridad
- **Actualizaciones:** Parches de seguridad aplicados regularmente

#### Protección de Infraestructura
- **Firewall:** Configurado para bloquear accesos no autorizados
- **Prevención DDoS:** Protección contra ataques de denegación de servicio
- **Respaldos:** Copias de seguridad diarias, conservadas por 30 días
- **Recuperación:** Plan de continuidad de negocio y recuperación de desastres

### 3. RETENCIÓN DE DATOS (ACTUALIZADO)

#### Mientras su cuenta esté activa
- **Datos de perfil:** Conservados indefinidamente
- **Historial de citas:** Últimos 3 años visible, histórico archivado
- **Imágenes:** Mientras no sean eliminadas manualmente
- **Logs de actividad:** 90 días

#### Después de eliminar su cuenta

**Eliminación inmediata (dentro de 24 horas):**
- Contraseña
- Email (parcialmente hasheado para prevenir recreación)
- Teléfono
- Foto de perfil
- Preferencias y configuraciones

**Eliminación gradual (30 días):**
- Historial de citas detallado
- Datos de uso de la aplicación
- Cachés y datos temporales

**Conservación mínima (según obligaciones legales):**
- **Qué conservamos:**
  - ID de usuario (hasheado)
  - Nombre (solo inicial)
  - Fecha de registro y eliminación
  - Transacciones financieras (cuando se implemente): 5-10 años según ley fiscal argentina
- **Por qué:**
  - Cumplir con Ley de Defensa del Consumidor
  - Regulaciones fiscales y contables (AFIP)
  - Prevenir fraude y cuentas múltiples
  - Mantener integridad de reseñas publicadas
- **Acceso:** Datos archivados, sin acceso operativo normal

#### Reseñas y Contenido Público
- **Reseñas publicadas:** Se mantienen anónimamente (solo inicial del nombre)
- **Calificaciones:** Se mantienen agregadas para estadísticas del negocio
- **Puede solicitar:** Eliminación de reseñas específicas

#### Plazos según Tipo de Usuario

**Clientes:**
- Eliminación completa: 30 días
- Excepto obligaciones fiscales (si hubo pagos)

**Negocios:**
- Eliminación completa: 60 días
- Datos fiscales: Según ley argentina (5-10 años)
- Información de servicios históricos: Anonimizada

### 4. PROVEEDORES TERCEROS Y SUBPROCESADORES

Compartimos datos con los siguientes proveedores que procesan información en nuestro nombre:

#### Amazon Web Services (AWS)
- **Servicio:** Almacenamiento de imágenes (S3)
- **Ubicación:** Estados Unidos
- **Datos compartidos:** Imágenes de perfil y galería
- **Propósito:** Almacenamiento seguro y entrega de contenido
- **Certificaciones:** SOC 2, ISO 27001, PCI DSS
- **Política:** https://aws.amazon.com/privacy/

#### Mercado Pago (Implementación Futura)
- **Servicio:** Procesamiento de pagos
- **Ubicación:** Argentina/Región
- **Datos compartidos:** Información necesaria para procesar pagos
- **Propósito:** Facilitar transacciones seguras
- **Nota:** NO almacenamos datos de tarjetas en nuestros servidores
- **Cumplimiento:** PCI DSS Level 1
- **Política:** https://www.mercadopago.com.ar/privacidad

#### Proveedor de Hosting
- **Servicio:** Hosting de servidores y base de datos
- **Ubicación:** Argentina
- **Datos compartidos:** Todos los datos de la aplicación
- **Propósito:** Infraestructura de la plataforma
- **Seguridad:** Certificado ISO 27001, backups cifrados

**Obligaciones contractuales:**
Todos nuestros proveedores están obligados a:
- Mantener confidencialidad de los datos
- Implementar medidas de seguridad apropiadas
- No usar datos para propósitos propios
- Eliminar datos cuando se termine la relación
- Notificar brechas de seguridad

## SUS DERECHOS Y OPCIONES

### 1. ACCESO Y ACTUALIZACIÓN
- Puede ver y actualizar su información desde la configuración de la app
- Puede solicitar una copia de sus datos contactándonos

### 2. ELIMINACIÓN DE CUENTA
- Puede eliminar su cuenta desde la configuración (función en desarrollo)
- También puede solicitar eliminación contactando a: alesauro30@gmail.com
- La eliminación es permanente y no reversible

### 3. RETIRO DE CONSENTIMIENTO
- Puede retirar el consentimiento para notificaciones en cualquier momento
- Puede revocar permisos desde la configuración de su dispositivo

### 4. RESTRICCIÓN Y OPOSICIÓN
- Puede solicitar que dejemos de usar sus datos para ciertos fines
- Puede oponerse al procesamiento de sus datos en ciertas circunstancias

### 5. PORTABILIDAD
- Puede solicitar recibir sus datos en formato legible por máquina

### 6. CORRECCIÓN
- Si detecta datos inexactos, puede corregirlos o solicitarnos su corrección

## PRIVACIDAD DE MENORES

- La aplicación NO está diseñada para menores de 13 años
- Verificamos la edad durante el registro
- **Si descubrimos que un menor de 13 años creó una cuenta, la eliminaremos inmediatamente**
- Los padres/tutores pueden contactarnos si sospechan uso no autorizado

## COOKIES Y TECNOLOGÍAS SIMILARES

### QUÉ UTILIZAMOS

#### Tokens de Autenticación (JWT)
- **Qué son:** JSON Web Tokens para mantener su sesión
- **Almacenamiento:** Local en su dispositivo (AsyncStorage/SharedPreferences)
- **Duración:** 30 días o hasta cerrar sesión
- **Propósito:** Evitar que tenga que iniciar sesión constantemente
- **Cifrado:** Tokens firmados con algoritmo HS256
- **Revocación:** Se invalida al cerrar sesión o cambiar contraseña

#### Caché Local de Aplicación
- **Qué es:** Almacenamiento temporal de datos para mejorar rendimiento
- **Datos almacenados:**
  - Información de perfil (nombre, email)
  - Últimas búsquedas (máximo 10)
  - Preferencias de la app (idioma, notificaciones)
- **Duración:** Se actualiza cada vez que abre la app
- **Tamaño máximo:** 5MB
- **Eliminación:** Al cerrar sesión o desinstalar la app

#### Identificadores del Dispositivo
- **Qué recopilamos:**
  - ID de instalación de la app (generado por nosotros)
  - Modelo y versión del sistema operativo
- **NO recopilamos:**
  - IMEI o números de serie del dispositivo
  - Dirección MAC
  - Identificadores de publicidad (IDFA/AAID)
- **Propósito:**
  - Prevenir fraude (múltiples cuentas)
  - Debugging y soporte técnico
  - Gestión de sesiones
- **NO se comparte:** Con terceros ni para publicidad

### QUÉ NO UTILIZAMOS

#### Tecnologías de Rastreo Prohibidas
- ✗ **Cookies de terceros** (Google Analytics, Facebook Pixel, etc.)
- ✗ **Píxeles de seguimiento** o web beacons
- ✗ **Fingerprinting del navegador/dispositivo**
- ✗ **Scripts de rastreo entre aplicaciones**
- ✗ **SDKs de publicidad** (AdMob, Facebook Ads, etc.)
- ✗ **Herramientas de mapeo de sesión** (Hotjar, FullStory, etc.)
- ✗ **Identificadores de publicidad** para targeting

#### Por Qué No Los Usamos
- Respetamos su privacidad
- No monetizamos mediante publicidad
- No vendemos datos a terceros
- Cumplimos con regulaciones de privacidad más estrictas

### CONTROL DE USUARIO

**Puede controlar estos datos:**
1. **Cerrar sesión:** Invalida tokens inmediatamente
2. **Limpiar caché:** Desde configuración de la app (función en desarrollo)
3. **Desinstalar app:** Elimina todos los datos locales
4. **Revocar permisos:** Desde configuración del dispositivo

### FUTURAS IMPLEMENTACIONES

Si en el futuro necesitamos implementar tecnologías de seguimiento:
- Le notificaremos con 30 días de anticipación
- Actualizaremos esta política
- Solicitaremos su consentimiento explícito
- Siempre podrá optar por no participar

## CAMBIOS A ESTA POLÍTICA

- Podemos actualizar esta Política de Privacidad ocasionalmente
- Le notificaremos sobre cambios significativos mediante:
  - Notificación en la aplicación
  - Correo electrónico
  - Aviso destacado
- La fecha de "Última actualización" siempre reflejará la versión actual
- El uso continuo de la aplicación después de cambios significa aceptación

## TRANSFERENCIAS INTERNACIONALES DE DATOS

- Sus datos pueden ser transferidos a servidores en Argentina y EE.UU.
- Estos países pueden tener leyes de protección de datos diferentes
- Implementamos salvaguardas apropiadas para proteger sus datos
- Al usar la aplicación, consiente estas transferencias

## BASE LEGAL PARA EL PROCESAMIENTO (GDPR)

Si se encuentra en la Unión Europea, procesamos sus datos basándonos en:
- **Consentimiento:** Cuando usted acepta esta política
- **Contrato:** Para cumplir con el servicio que solicita
- **Interés legítimo:** Para mejorar nuestros servicios
- **Obligación legal:** Para cumplir con leyes aplicables

## CONTACTO Y RECLAMOS

### CONTÁCTENOS SOBRE PRIVACIDAD

**Responsable de Protección de Datos**  
Alexander Sauro -  sabturno  

**Información de Contacto:**
- **Correo electrónico:** alesauro30@gmail.com
- **Teléfono:** +54 343 462 4196
- **Dirección postal:** Misiones 559, Paraná, E3100AXK, Entre Ríos, Argentina
- **Horario de atención:** Lunes a Viernes, 9:00 - 18:00 (hora de Argentina)

### SOLICITUDES ESPECÍFICAS DE PRIVACIDAD

Incluya en el asunto del correo:

#### 1. Acceso a Datos Personales
- **Asunto:** "Solicitud de Acceso a Datos - [Su Nombre]"
- **Información necesaria:** Correo registrado, nombre completo
- **Plazo de respuesta:** 10-15 días hábiles
- **Qué recibirá:** Copia de todos sus datos personales en formato PDF o JSON

#### 2. Corrección de Datos
- **Asunto:** "Solicitud de Corrección de Datos"
- **Información necesaria:** Datos incorrectos y corrección propuesta
- **Plazo de respuesta:** 5-7 días hábiles
- **Nota:** Algunos datos puede corregirlos directamente desde la app

#### 3. Eliminación de Cuenta y Datos
- **Asunto:** "Solicitud de Eliminación de Cuenta - DEFINITIVA"
- **Información necesaria:** 
  - Correo registrado
  - Confirmación explícita de eliminación
  - Motivo (opcional, nos ayuda a mejorar)
- **Verificación:** Le enviaremos un código de confirmación
- **Plazo de procesamiento:** 5-10 días hábiles
- **Irreversible:** La eliminación es permanente
- **Qué se conserva:** Solo datos mínimos requeridos legalmente (ver sección Retención)

#### 4. Exportación de Datos (Portabilidad)
- **Asunto:** "Solicitud de Exportación de Datos"
- **Formato disponible:** JSON, CSV o PDF
- **Incluye:** 
  - Datos de perfil
  - Historial de citas
  - Reseñas publicadas
  - Preferencias
- **Plazo de respuesta:** 10-15 días hábiles

#### 5. Oposición al Procesamiento
- **Asunto:** "Oposición al Procesamiento - [Especificar]"
- **Puede oponerse a:**
  - Marketing (aunque no enviamos actualmente)
  - Ciertos usos de datos para mejoras del servicio
- **No puede oponerse a:**
  - Procesamiento necesario para el servicio
  - Obligaciones legales

#### 6. Limitación del Tratamiento
- **Asunto:** "Solicitud de Limitación de Tratamiento"
- **Cuándo aplicable:**
  - Disputa sobre exactitud de datos
  - Procesamiento ilícito pero no quiere eliminación
  - Datos necesarios para reclamaciones legales
- **Plazo de respuesta:** 7-10 días hábiles

#### 7. Revocación de Consentimiento
- **Asunto:** "Revocación de Consentimiento - [Especificar]"
- **Puede revocar consentimiento para:**
  - Notificaciones push (también desde configuración de la app)
  - Uso de ubicación (cuando se implemente)
  - Uso de imágenes para mejora del servicio
- **Efecto:** Inmediato tras confirmación

### TIEMPO DE RESPUESTA GARANTIZADO

| Tipo de Solicitud | Tiempo de Respuesta | Tiempo de Procesamiento |
|-------------------|---------------------|-------------------------|
| Consulta general | 72 horas | N/A |
| Acceso a datos | 3-5 días | 10-15 días |
| Corrección | 24-48 horas | 5-7 días |
| Eliminación | 48 horas | 5-10 días |
| Exportación | 3-5 días | 10-15 días |
| Brecha de seguridad | 24 horas | Inmediato |

### VERIFICACIÓN DE IDENTIDAD

Para proteger su privacidad, verificaremos su identidad para solicitudes de:
- Acceso a datos
- Eliminación de cuenta
- Exportación de datos
- Cambios importantes

**Métodos de verificación:**
1. Código de confirmación al correo registrado
2. Pregunta de seguridad
3. Verificación de datos de perfil

**Documentación NO requerida:** No le pediremos DNI ni documentos de identidad a menos que exista disputa legal

### PRESENTAR UN RECLAMO

#### Paso 1: Contacto Directo
Le recomendamos contactarnos primero:
- Responderemos dentro de 72 horas
- Trabajaremos para resolver su preocupación
- La mayoría de problemas se resuelven en 7-10 días

#### Paso 2: Escalamiento Interno
Si no está satisfecho:
- Solicite escalamiento a supervisor
- Proporcionaremos respuesta formal por escrito
- Plazo adicional: 7 días hábiles

#### Paso 3: Autoridad de Protección de Datos
Si aún no está satisfecho, puede presentar reclamo ante:

**Argentina:**  
**Agencia de Acceso a la Información Pública (AAIP)**
- **Sitio web:** https://www.argentina.gob.ar/aaip
- **Correo:** datospersonales@aaip.gob.ar
- **Teléfono:** 0800-222-DATOS (3286)
- **Dirección:** Av. Pte. Gral. Julio A. Roca 710, Piso 3°, CABA

**Unión Europea (si aplica - GDPR):**
Puede presentar reclamo ante la autoridad de protección de datos de su país:
- **Lista de autoridades:** https://edpb.europa.eu/about-edpb/board/members_en

### REPORTAR VIOLACIÓN DE SEGURIDAD

Si sospecha que sus datos han sido comprometidos:

**Contacto de Emergencia:**
- **Correo:** alesauro30@gmail.com
- **Asunto:** "URGENTE - Posible Violación de Seguridad"
- **Respuesta:** Dentro de 24 horas
- **Investigación:** Inicio inmediato

**Qué incluir:**
- Descripción de lo sucedido
- Cuándo lo detectó
- Qué datos cree que fueron afectados
- Capturas de pantalla si es posible

**Qué haremos:**
1. Confirmaremos recepción en 24 horas
2. Investigaremos inmediatamente
3. Le informaremos de los hallazgos
4. Tomaremos medidas correctivas
5. Notificaremos a autoridades si es requerido

### DIVULGACIÓN RESPONSABLE DE VULNERABILIDADES

Si descubre una vulnerabilidad de seguridad:
- **Correo:** alesauro30@gmail.com
- **Asunto:** "Divulgación Responsable - Vulnerabilidad de Seguridad"
- **Respuesta:** 24-48 horas
- **Reconocimiento:** Agradeceremos públicamente (si lo desea)
- **Recompensa:** Consideraremos según gravedad (programa en desarrollo)

**Pedimos:**
- No divulgue públicamente hasta que corrijamos
- Proporcione detalles técnicos
- Tiempo razonable para corregir (90 días típicamente)

## CUMPLIMIENTO CON GOOGLE PLAY

Esta Política de Privacidad cumple con:
- Política de Datos de Usuario de Google Play
- Requisitos de divulgación de datos
- Prácticas de seguridad de datos

## RESUMEN DE PRÁCTICAS DE DATOS

### DATOS QUE RECOPILAMOS ✓
- Información de cuenta (nombre, email, teléfono)
- Reservas y citas
- Reseñas escritas
- Datos de uso de la app
- Información del dispositivo

### DATOS QUE NO RECOPILAMOS ✗
- Ubicación GPS (versión actual)
- Mensajes privados (no hay chat)
- Contactos del teléfono
- Fotografías en reseñas
- Datos de tarjetas (manejado por Mercado Pago)

### CÓMO PROTEGEMOS SUS DATOS ✓
- Cifrado de contraseñas
- Conexiones HTTPS
- Acceso limitado
- No vendemos datos
- Eliminación permanente cuando solicita

---

## HISTORIAL DE VERSIONES

**Versión 1.1** (13 de diciembre de 2025)
- Mejoras en descripción de permisos de la aplicación
- Detalles técnicos de seguridad expandidos (bcrypt, HTTPS, AWS S3)
- Clarificación de retención de datos por tipo de usuario
- Proveedores terceros específicos agregados
- Mejoras en procedimientos de contacto y solicitudes
- Información sobre cookies y tecnologías de seguimiento
- Sección de reportes de seguridad agregada

**Versión 1.0** (10 de diciembre de 2025)
- Versión inicial de la Política de Privacidad

---

**IMPORTANTE:** Esta política está sujeta a cambios. Revísela periódicamente para estar informado sobre cómo protegemos su información. Los cambios significativos serán notificados mediante la aplicación y por correo electrónico.

**Última actualización:** 13 de diciembre de 2025  
**Versión actual:** 1.1  
**Próxima revisión programada:** Junio de 2026 (o antes si hay cambios significativos)

---

**Al utilizar  sabturno, usted reconoce que ha leído, comprendido y aceptado esta Política de Privacidad en su totalidad.**


interface LanguageProps {
  tech: string;
}

const TechLogos = ({ tech }: LanguageProps) => {
  const jsonLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
    >
      <path
        fill="#f5de19"
        d="M4.014 14.976a2.5 2.5 0 0 0 1.567-.518a2.38 2.38 0 0 0 .805-1.358a15.3 15.3 0 0 0 .214-2.944q.012-2.085.075-2.747a5.2 5.2 0 0 1 .418-1.686a3 3 0 0 1 .755-1.018A3.05 3.05 0 0 1 9 4.125A6.8 6.8 0 0 1 10.544 4h.7v1.96h-.387a2.34 2.34 0 0 0-1.723.468a3.4 3.4 0 0 0-.425 2.092a36 36 0 0 1-.137 4.133a4.7 4.7 0 0 1-.768 2.06A4.6 4.6 0 0 1 6.1 16a3.8 3.8 0 0 1 1.992 1.754a8.9 8.9 0 0 1 .618 3.865q0 2.435.05 2.9a1.76 1.76 0 0 0 .504 1.181a2.64 2.64 0 0 0 1.592.337h.387V28h-.7a5.7 5.7 0 0 1-1.773-.2a2.97 2.97 0 0 1-1.324-.93a3.35 3.35 0 0 1-.681-1.63a24 24 0 0 1-.165-3.234a16.5 16.5 0 0 0-.214-3.106a2.4 2.4 0 0 0-.805-1.361a2.5 2.5 0 0 0-1.567-.524Zm23.972 2.035a2.5 2.5 0 0 0-1.567.524a2.4 2.4 0 0 0-.805 1.361a16.5 16.5 0 0 0-.212 3.109a24 24 0 0 1-.169 3.234a3.35 3.35 0 0 1-.681 1.63a2.97 2.97 0 0 1-1.324.93a5.7 5.7 0 0 1-1.773.2h-.7V26.04h.387a2.64 2.64 0 0 0 1.592-.337a1.76 1.76 0 0 0 .506-1.186q.05-.462.05-2.9a8.9 8.9 0 0 1 .618-3.865A3.8 3.8 0 0 1 25.9 16a4.6 4.6 0 0 1-1.7-1.286a4.7 4.7 0 0 1-.768-2.06a36 36 0 0 1-.137-4.133a3.4 3.4 0 0 0-.425-2.092a2.34 2.34 0 0 0-1.723-.468h-.387V4h.7a6.8 6.8 0 0 1 1.54.125a3.05 3.05 0 0 1 1.149.581a3 3 0 0 1 .755 1.018a5.2 5.2 0 0 1 .418 1.686q.062.662.075 2.747a15.3 15.3 0 0 0 .212 2.947a2.38 2.38 0 0 0 .805 1.355a2.5 2.5 0 0 0 1.567.518Z"
      />
    </svg>
  );

  const gccLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
    >
      <path
        fill="currentColor"
        d="M56.083.004c-2.82.049-5.596.495-8.266 1.574v-.002c-4.776 1.92-8.956 5.072-12.764 8.445c-6.366 5.643-11.623 12.448-15.366 19.964c-3.517 7.06-6.075 14.694-7.855 22.392v.002c-2.874 12.476-1.346 25.337 2.23 37.357c1.965 6.602 4.562 13.252 8.734 18.869c4.273 5.756 9.75 11.04 16.465 14.116c4.152 1.904 8.665 3.377 13.164 4.252c5.437 1.06 10.78 1.36 16.231.615c5.303-.726 9.006-2.311 12.74-4.513c10.88-6.42 22.35-17.674 25.562-36.798v-.002c.99-5.87 1.443-12.245.062-22.955c-.73-5.665-2.394-15.252-4.825-20.754v-.002l-.008-.02l-.073-.158l-.042-.046l-.051-.087c.112-.138.21-.233.583-.186c.437.056 1.121.325 1.992.864l.006.002l.004.002c1.616.954 3.63 1.12 5.72 1.265c.865.06 1.503.075 1.987.03a2.4 2.4 0 0 0 .636-.13c.191-.073.392-.197.508-.418a.87.87 0 0 0 .04-.662a1.8 1.8 0 0 0-.273-.502c-.233-.319-.562-.658-.967-1.065l-.01-.01l-1.13-1.016c.333-.13.685-.285 1.083-.652c.955-.882 2.049-2.913 3.081-5.406c1.033-2.494 1.935-5.403 2.212-7.893c.153-1.235.223-2.222.145-3.038c-.08-.817-.324-1.494-.83-1.962c-.507-.468-1.206-.678-2.068-.744s-1.914.007-3.234.159h-.006c-2.19.275-4.743.856-6.003 1.642c-.037.019-.383.19-.757.45a2.7 2.7 0 0 0-.557.485c-.082.099-.16.21-.21.368a.77.77 0 0 0 .048.567l.002.002v.002c.197.36.462.422.727.518s.56.166.844.223c.554.11 1.044.162 1.068.164c1.862.293 3.003.75 3.635 1.236c.631.485.8.958.8 1.537c0 .51-.456 1.81-1.044 2.856c-.293.524-.616 1.002-.899 1.325c-.241.276-.436.365-.445.391c.041.015.055.026-.027.026c-.014 0 .026-.021.027-.026l-.124-.043l-.028-.018l-.172-.115h-.002c-.49-.318-1.27-.954-2.03-1.668l-.006-.004c-1.16-1.125-2.092-1.808-3.077-2.111c-.938-.289-1.885-.184-2.96.117c-1.3-.343-2.963-.537-4.249-1.275a3 3 0 0 1-.063-.166c-.082-.226-.244-.603-.63-1.087c-.678-.853-1.347-1.313-2.05-1.465c-.692-.15-1.342-.006-2.012.16c-.227.041-.29.032-.469.057c.131-.076.202-.132.356-.215h.002l.296-.166l.267-.123l.052-.154c.149-.113.316-.202.393-.409c.117-.316.027-.64-.113-.915c-.274-.54-.826-1.19-1.704-2.315l-.007-.013c-.05-.085-.098-.17-.16-.261l.007.008a2 2 0 0 0-.102-.133l-.002-.002l-.002-.004a1 1 0 0 0-.076-.075h-.002c.017.015-.016-.02-.059-.053l-.004-.002c-.006-.005-.004-.002-.01-.006c-.083-.108-.143-.183-.243-.314l-.004-.006l-1.56-2.117l1.463.733c1.745.889 3.372 1.46 4.697 1.672c.662.107 1.25.126 1.759.03c.5-.094.946-.326 1.213-.733a.77.77 0 0 0 .147-.457a.94.94 0 0 0-.117-.4c-.118-.228-.29-.418-.506-.614c-.43-.39-1.044-.788-1.78-1.138c-1.208-.606-2.812-2.16-3.331-3.137l-.002-.004l-.002-.004c-.678-1.224-1.537-2.616-1.977-3.208l-.014-.016l-.013-.018c-.668-.753-1.864-1.158-3.167-1.376s-2.706-.21-3.79.198l-.005.002l-.004.002c-.224.089-.429.214-.638.332c-3.439-3.455-7.73-5.983-12.289-7.604C66.194.74 62.602.32 58.916.077a34 34 0 0 0-2.833-.073m.016 1.012q1.377-.022 2.75.07c3.652.24 7.14.654 10.618 1.891c4.56 1.622 8.858 4.133 12.209 7.6l.293.302l.35-.23q.367-.245.778-.408c.802-.302 2.097-.344 3.27-.148c1.168.195 2.217.66 2.563 1.045c.363.494 1.232 1.88 1.884 3.056c.69 1.3 2.297 2.83 3.769 3.568l.006.002l.004.002c.666.316 1.222.684 1.546.978c.112.103.152.166.201.231c-.088.088-.18.18-.447.23c-.338.063-.826.058-1.41-.036c-1.171-.188-2.727-.722-4.4-1.575l-.003-.002l-3.348-1.676l-.634.753l2.816 3.82l.002.004c.135.178.191.243.305.392l.063.083l.08.043v.002h.003l.002.004c0-.002-.005-.008.008.012l.004.004l.004.004c.017.024.067.116.128.22l.018.027l.02.025c.92 1.18 1.475 1.882 1.638 2.204c.082.161.048.157.066.11c.017-.049.007 0-.157.094l-.077.045l-.035.02l-.054.032v-.002l-.225.124c-.464.252-.848.48-1.138.692a2.4 2.4 0 0 0-.374.32c-.106.116-.233.25-.24.526a.65.65 0 0 0 .145.41a.7.7 0 0 0 .283.197c.178.07.335.08.524.081c.376.004.877-.057 1.579-.184l.016-.004l.015-.004c.66-.164 1.154-.251 1.588-.158c.433.093.882.36 1.472 1.103v.002c.321.402.4.612.469.802c.034.096.063.2.14.334c.076.134.215.277.368.364c1.58.909 3.445 1.083 4.607 1.402l.14.037l.139-.041c1.058-.313 1.786-.38 2.532-.15s1.564.794 2.678 1.875l.002.002l.004.002c.793.747 1.587 1.403 2.178 1.787l.212.138l.013.008c.182.103.28.218.623.218c.56 0 .88-.36 1.233-.763c.353-.404.701-.926 1.02-1.495c.639-1.136 1.174-2.388 1.174-3.352c0-.829-.35-1.691-1.195-2.34c-.845-.65-2.137-1.125-4.094-1.433l-.014-.002l-.012-.002s-.492-.05-1.002-.152a5 5 0 0 1-.668-.176c.066-.057.108-.105.194-.164c.314-.219.674-.402.674-.402l.02-.01l.02-.013c.881-.55 3.5-1.233 5.595-1.497c1.29-.147 2.297-.21 3.036-.154c.74.057 1.186.226 1.459.479c.273.252.442.638.508 1.316c.065.678.009 1.616-.14 2.825v.006c-.26 2.333-1.137 5.188-2.143 7.615s-2.211 4.475-2.835 5.05c-.787.728-1.184.63-1.284.605l-.21-.053l-.798.5l2.322 2.085c.396.398.702.725.864.947c.025.034.022.039.04.067c-.068.015-.113.03-.228.042q-.56.054-1.82-.032c-2.071-.144-3.935-.34-5.268-1.123l-.01-.004c-.934-.577-1.708-.915-2.388-1.002c-.682-.087-1.34.157-1.67.684l-.316.423l.221.3l.014.02l-.045-.079l.174.22l-.1-.097l-.023-.034c.003.008-.026-.022.022.038l.249.41l.002.003l.002.008l.008.016c2.322 5.257 4.022 14.862 4.746 20.475c1.37 10.633.924 16.855-.054 22.657v.002c-3.157 18.801-14.376 29.78-25.08 36.096c-3.665 2.162-7.193 3.67-12.364 4.378c-5.328.729-10.549.44-15.9-.603c-4.414-.858-8.855-2.31-12.934-4.18c-6.504-2.98-11.871-8.139-16.073-13.8c-4.064-5.471-6.632-12.006-8.58-18.552c-3.543-11.907-5.036-24.591-2.214-36.842v-.002c1.764-7.633 4.301-15.195 7.775-22.169c3.683-7.395 8.863-14.097 15.133-19.655c3.767-3.336 7.862-6.41 12.472-8.264v-.002c2.534-1.024 5.177-1.451 7.902-1.498m.01.514c-2.677.047-5.256.462-7.722 1.459c-4.526 1.82-8.578 4.857-12.324 8.175v-.002C29.84 16.677 24.704 23.331 21.05 30.667c-3.453 6.93-5.98 14.454-7.736 22.054c-2.797 12.138-1.32 24.73 2.205 36.58c1.941 6.518 4.491 12.996 8.5 18.394c4.167 5.614 9.478 10.708 15.875 13.64c4.043 1.855 8.45 3.293 12.822 4.144c5.305 1.034 10.466 1.317 15.732.598c5.106-.698 8.542-2.171 12.172-4.312c10.617-6.266 21.705-17.103 24.835-35.74c.972-5.771 1.42-11.913.053-22.508c-.717-5.567-2.431-15.141-4.688-20.281l-.014-.016c-.115.302-.251.76-.409 1.405l-.235.955l-.109-.127c.015 1.325.43 3.725.923 4.956c.96 2.28.89 4.825-.144 6.967l-.231 1.139l-.672.08c-.282.164-.658.277-1.218.317c-.484.034-.583.01-.872-.061l-.608.075c-.272.244-.359.439-.757.583l-.495.383l-1.403.25c-1.027.337-1.84.663-1.945 1.096l-.142 2.127l-.305.184c-.312.7-.776 1.13-1.328 1.13c-.532 0-.937-.268-.937-.531c0-.807-2.29-3.892-2.965-3.892c-.333 0 .083 1.142.89 2.012c1.07 1.139 1.475 2.21 1.273 3.819c-.268 2.748-2.01 3.352-3.084 1.14l-.735-1.54v1.471c-.067 1.945-1.198 1.819-4.155 0c-.857-.577-1.447-.803-1.905-1.289c-.261-1.221-.29-2.392.296-4.27c.163-.538.118-.961-.085-1.272l-2.146-.593c-.56.069-1.19.243-1.852.51l-1.985 1.042c-1.482 1.007-4.466 2.666-6.665 3.797c-2.21 1.071-3.874 2.24-4.221 2.411c-.379.19-.687.272-1.072.087l-.358.188l-.948-1.463c-.52-.659-1.162-1.57-2.042-2.9l-2.752-4.123l-.52-.52l-3.832-.448c-2.211-.27-4.154-.735-4.356-1.071c-.028-.037-.037-.113-.036-.212L46.503 57l.328-.844c.217-.868.638-2.115 1.21-3.47l1.676-4.02l-2.747-4.823q-.092-.164-.18-.329l-.008.006l-.028-.069c-1.46-2.583-2.816-5.419-3.133-6.374c-.47-1.744-.336-2.014 1.273-2.613c1.004-.405 3.012-.809 4.487-.943c1.473-.13 2.883-.265 3.083-.265c.203-.067 2.074-2.414 4.088-5.293c2.074-2.814 4.492-5.83 5.36-6.699c1.542-1.408 1.878-1.475 4.756-.674c1.295.332 2.067.488 2.668.453l1.856-.975c.058-.051.107-.09.168-.146c.87-.805 3.017-1.72 4.27-1.423c.609-1.035 1.33-2.325 2.636-4.028c1.035-1.356 1.916-2.674 2.961-3.621c-3.275-3.355-7.465-5.806-11.93-7.393c-3.41-1.214-6.847-1.622-10.482-1.862a33 33 0 0 0-2.706-.065m29.166 8.831c-3.187.04-5.888 3.125-9.424 10.364c-3.953 7.906-4.088 9.381-1.34 10.788s4.757 1.273 8.238-.672c1.945-1.139 4.558-1.874 7.44-2.141c2.412-.202 4.424-.603 4.424-.872c0-.806-1.431-1.922-2.546-1.743c-1.134.18-6.501 1.421-9.792 1.915l-.192.036l-.03.002c-1.094.158-1.929.224-2.249.122c-.928-.317-1.352-1.165-1.298-2.39l-.176-.47l.348-.713c.186-.8.548-1.718 1.025-2.702l.127-.364l.174-.286l.105-.172a26 26 0 0 1 1.035-1.746c1.476-2.277 3.014-4.221 3.55-4.356c.47-.202 2.413.536 4.29 1.609c2.45 1.364 6.324 2.58 6.581 2.336c.124-.114-2.008-.949-2.83-1.534c-.803-.534-2.076-2.143-2.815-3.55c-.668-1.407-1.743-2.746-2.344-3.014c-.803-.301-1.565-.457-2.3-.447zm-.514 6.074c-.803 0-1.984 2.44-2.462 3.495c.451.3 2.084 1.26 4.265 2.08l1.48.503c.023.006.043.016.066.022c.827.22 1.307.376 1.393.19c-1.427-2.054-3.065-4.133-4.516-6.224a.55.55 0 0 0-.226-.066M74.464 19.89l-1.094.237a9 9 0 0 0-1.472 1.002c-1.744 1.474-4.155 1.74-6.301.6c-.019-.01-.033-.013-.052-.023l-1.458-.204c-.585.257-1.284.97-2.51 2.376c-.035.037-.077.088-.111.127l-3.28 4.036c-.487.65-.945 1.276-1.298 1.797c-1.655 2.408-2.543 3.585-3.595 4.225l-.178.22l-.3.043c-.805.352-1.765.476-3.232.603c-1.081.095-1.911.2-2.56.342l-1.556.775c-.165.244-.22.547-.176.923l1.714 4.344l.233.518l7.312-5.999a159 159 0 0 0 2.204-2.109c3.389-3.335 5.046-4.668 6.4-5.07l.006-.003h.01c.325-.096.64-.153.952-.153c1.139 0 3.15-.2 4.49-.397c2.278-.405 2.682-.807 4.223-4.09c.938-2.078 1.676-3.822 1.676-3.956a.27.27 0 0 0-.047-.165zm7.044 1.148c-.288.47-.632.817-1.117 1.96l-.492 1.41l-.11.23c-.132.467-.197.867-.177 1.19l.281.748c.418.446 1.285.527 2.659.313c.744-.11 1.708-.372 2.632-.682l-.007-.014l3.783-2.074l-2.455-.78c-.206-.068-.479-.192-.724-.29l-.233-.072l-.158-.087c-1.615-.697-3.6-1.747-3.882-1.852m32.534.96c-1.94-.066-7.748 1.165-8.349 1.768q-.033.027-.016.049a6 6 0 0 1 .7.12c.61.052 1.463.095 2.034.206c3.42.74 4.173 1.878 4.07 3.898c-.106 2.052-.716 3.676-1.787 4.815c-1.408 1.474-1.676 1.541-3.285.668c-.937-.467-2.277-1.538-2.882-2.277c-.668-.803-1.874-1.405-2.68-1.405c-1.475.065-1.51.74-.376 2.255c.218.166.45-.166 1.297.031c.577.131.838.4 1.044.57c2.7 2.214 4.316 4.657 5.012 5.874c1.21 2.146 3.278.115 5.353-5.111c1.34-3.285 2.308-6.345 2.174-8.69c-.063-2.798-.767-2.635-2.309-2.769zm-18.293 7.49c-1.041-.02-2.628.14-5.091.417c-2.06.239-4.404.899-6.395 1.672l-2.97 1.427c-.858.534-1.422 1.05-1.422 1.46c0 .269-1.007 1.474-2.146 2.679l-2.21 2.277l4.49-.336c4.021-.201 5.025-.6 8.575-3.08c4.289-3.016 5.495-2.882 1.878.265c-2.748 2.281-7.037 4.223-9.314 4.29c-1.272 0-1.877.402-2.146 1.474c-.534 1.877.538 3.752 3.352 6.1c2.68 2.277 4.02 4.688 4.356 7.839c.103 1.105.582 2.328 1.3 3.29l.367.443c.09.099.18.198.274.287c.944.88 1.805 1.976 2.074 2.556l.259.308c.131-.046.176-.607.079-1.524c-.066-1.944.068-2.281 1.138-2.146c.252.047.708.1 1.21.128l2.148-.38l.453-.351c-.964-.034-4.024-.603-4.68-.603c-1.475 0-3.416-2.009-3.416-3.55c0-.604.87-1.541 2.008-2.143c2.412-1.277 2.68-1.275 2.68.066v3.014c0 1.609.336 1.81 3.084 2.214c1.044.123 2.047.186 2.75.176l.861-.107l.006-.002c.276-.18.496-.566.658-1.075l.237-1.177c.086-.687.1-1.451.042-2.221l-.872-3.605a31 31 0 0 1-.77-3.18l-.443-1.831v-1.23l-.394-3.304l2.212-.47c1.74-.404 2.077-.735 1.741-1.878c-.197-.803-.399-2.277-.399-3.214c0-.941-.471-2.28-1.075-3.017c-1.005-1.206-1.005-1.206-.735.605c.402 2.545-1.073 1.942-1.542-.605c-.253-1.38-.476-1.923-2.212-1.956zm-28.589.28l-4.13.48l.222 1.669c.202 1.34-.001 1.94-.604 1.94c-.469 0-.87-.666-.87-1.54c-.033-.624-.134-.889-.494-.693l-.279.23l-.006.004l-.01.008l-.34.292c-.377.375-.87.918-1.551 1.7c-1.945 2.213-2.68 3.623-2.68 5.159c0 1.206-.27 2.214-.605 2.214c-.802 0-1.471-1.945-1.004-2.882c.269-.47-.4 0-1.475 1.006c-1.004 1.004-1.94 2.612-1.94 3.548c-.136 2.146-1.206 2.282-1.744.203c-.175-.699-.295-1.045-.437-1.08l-.251.215a4 4 0 0 0-.25.464c-.234.639.016 1.695.65 2.925l1.63 2.653l-.01.024l.142.225l-1.676 3.886l-1.146 2.771l-.404 1.036l5.513 1.014c.017 0 .041.006.057.006c.501.019.913.089 1.3.245l.349.063l.356.358a5.8 5.8 0 0 1 .871.87l.534.535l3.073 4.736c.808 1.159 1.431 1.969 1.558 1.969c.404 0 8.51-4.086 8.982-4.485c.197-.202-.27-.742-1.009-1.275c-3.818-2.748-5.627-5.163-6.902-9.116c-.802-2.346-1.273-4.284-1.138-4.42c.672-.67 1.678.87 2.613 4.088c1.275 4.02 1.743 4.755 5.495 7.637l2.68 2.143l1.945-1.273c.665-.428 1.52-.696 2.405-.82l.022-.012l.016.004c1.596-.216 3.29.057 4.19.828c.177.22.741.254 1.421.146l2.305-.686l.577-.197l-3.441-3.078l.014-.027c-.59-.274-1.199-.497-1.746-.578c-4.759-.873-5.36-1.81-4.356-6.9c.668-3.352 1.677-2.417 1.475 1.406l-.202 3.484l3.016.536c1.524.275 2.468.29 3.131.057l.318-.14a2 2 0 0 0 .437-.32c.803-.734.465-1.272-2.146-3.416c-3.283-2.813-4.756-5.494-4.088-7.64c.336-1.138 0-1.409-2.68-1.745c-1.672-.265-3.012-.735-3.012-1.004s1.137-1.003 2.543-1.609c2.817-1.272 4.893-3.751 3.15-3.751c-.534 0-2.009-.466-3.282-1.071c-.508-.24-1-.55-1.449-.868l-.713-.338l-.423-.637c-.115-.128-.236-.26-.297-.367c-.175-.353-.48-.584-1.01-.728Zm35.147 2.999c-.138.018-.232.098-.263.253c-.233 1.146.61 3.652 1.546 3.318c1.072-.4 4.689 3.082 3.953 3.754c-.201.265-1.272-.269-2.21-1.21c-1.743-1.673-1.88-1.672-2.213-.399c-.401 1.61-.052 2.38 5.293 3.886c2.328.656 3.406.605 3.406.605s-.738-.576-1.386-1.214c-.653-.635-1.214-1.336-1.214-1.336c-.874-1.205-2.146-3.012-2.881-3.953c-.161-.2-.303-.37-.455-.557l-2.113-2.349c-.343-.312-.664-.567-.935-.684c-.207-.09-.389-.133-.528-.114m-8.3 3.103c1.272 0 3.685 2.48 3.017 3.149c-.202.268-1.273-.334-2.277-1.342c-1.277-1.34-1.476-1.807-.74-1.807m-.379 2.83c1.048-.1 1.92.22 2.19.99c.331 1.071-3.422 4.889-4.828 4.889c-.534 0-1.34-.602-1.74-1.34c-.537-1.004-.335-1.61 1.14-3.017c.97-.903 2.192-1.42 3.238-1.522m.518.572c-.505-.024-1.405.482-2.619 1.488c-1.205 1.004-1.54 1.743-1.07 2.08c.4.197 1.07-.203 1.475-.941c.4-.735 1.137-1.34 1.67-1.34c.538 0 1.009-.337 1.009-.669c0-.401-.161-.605-.465-.618m6.023 1.31v.144l-.318.054l.324.334a.8.8 0 0 0 .263-.085c.169-.225.044-.394-.27-.447zm-3.33 11.531c.401.016.752.07.988.174c.806.332.806.601-.135 1.605c-1.574 1.775-3.555 2.196-4.244.951c-.146-.27-.277-.725-.227-1.073c.052-.346.15-.79.42-1.064c.331-.34 1.99-.64 3.197-.593zm-.398 1.02c-.246-.02-.592.018-.976.054c-.732.067-1.327.267-1.038 1.077c.282.786 2.407-.48 2.407-.852c0-.183-.147-.258-.393-.279m-5.849.158c-.94 0-1.609 1.738-1.008 2.679c.74 1.206 1.678.736 1.678-1.004h-.002c0-.94-.336-1.675-.668-1.675m-5.969.588l-1.142.506l-.145.254c.039.383.534.79 1.293 1.33c.427.307.676.426.828.44l-.186-.431ZM41.698 78.02h.002a17.3 17.3 0 0 1 4.088.49q2.04.491 4.17 1.605l-.704 3.534h-.284q-1.733-1.628-3.775-2.356c-1.36-.482-2.824-.727-4.388-.727q-2.579 0-4.519 1.02a10 10 0 0 0-3.27 2.704q-1.297 1.656-1.96 3.862a15.3 15.3 0 0 0-.664 4.443c0 2.244.613 3.97 1.834 5.19q1.841 1.832 5.436 1.831a14.7 14.7 0 0 0 2.965-.288a18 18 0 0 0 2.6-.744l1.317-5.96h-6.21l.597-2.61h9.317l-2.312 9.994l-1.862.759a22 22 0 0 1-2.08.697a22 22 0 0 1-2.23.512a14 14 0 0 1-2.462.206q-4.814-.001-7.523-2.38c-1.801-1.586-2.704-3.835-2.704-6.756q.001-3.218.993-5.957c.663-1.822 1.624-3.415 2.885-4.77q1.88-2.017 4.606-3.16q2.727-1.139 6.137-1.139m24.254 0a14.4 14.4 0 0 1 3.815.49q1.801.495 3.692 1.558l-.703 3.502h-.233a18 18 0 0 0-1.04-.96q-.527-.446-1.573-.977q-.861-.454-2.048-.759q-1.19-.305-2.629-.304q-2.19 0-4.016.913a9.6 9.6 0 0 0-3.179 2.558q-1.311 1.594-2.063 3.878a15.5 15.5 0 0 0-.751 4.862q-.001 3.221 1.676 5.013q1.672 1.79 4.829 1.79a11.5 11.5 0 0 0 2.824-.335a13.3 13.3 0 0 0 2.431-.854a15 15 0 0 0 1.83-1.016c.54-.351 1.007-.681 1.39-.985h.223l-.735 3.598q-1.643.83-3.78 1.494t-4.541.664q-4.427 0-6.942-2.293q-2.519-2.29-2.518-6.495q-.002-3.223.968-6.008q.967-2.78 2.783-4.879q1.799-2.063 4.428-3.26q2.625-1.194 5.862-1.195m22.395 0a14.4 14.4 0 0 1 3.819.49q1.796.495 3.688 1.558l-.704 3.502h-.233a18 18 0 0 0-1.04-.96q-.526-.446-1.573-.977q-.86-.454-2.048-.759q-1.186-.305-2.629-.304q-2.188 0-4.016.913a9.6 9.6 0 0 0-3.174 2.558q-1.316 1.594-2.068 3.878q-.747 2.283-.747 4.862q0 3.221 1.672 5.013q1.672 1.79 4.829 1.79q1.488.001 2.825-.335a13.3 13.3 0 0 0 2.43-.854a15 15 0 0 0 1.831-1.016a18 18 0 0 0 1.391-.985h.222l-.735 3.598q-1.644.83-3.78 1.494a15.2 15.2 0 0 1-4.542.664q-4.426 0-6.941-2.293q-2.52-2.29-2.519-6.495q0-3.223.969-6.008c.648-1.854 1.573-3.479 2.783-4.879q1.801-2.063 4.427-3.26q2.625-1.194 5.863-1.195"
      />
    </svg>
  );

  const azureLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="k8yl7~hDat~FaoWq8WjN6a_VLKafOkk3sBX_gr1"
        x1="-1254.397"
        x2="-1261.911"
        y1="877.268"
        y2="899.466"
        gradientTransform="translate(1981.75 -1362.063) scale(1.5625)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#114a8b"></stop>
        <stop offset="1" stop-color="#0669bc"></stop>
      </linearGradient>
      <path
        fill="url(#k8yl7~hDat~FaoWq8WjN6a_VLKafOkk3sBX_gr1)"
        d="M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"
      ></path>
      <path
        fill="#0078d4"
        d="M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"
      ></path>
      <linearGradient
        id="k8yl7~hDat~FaoWq8WjN6b_VLKafOkk3sBX_gr2"
        x1="-1252.05"
        x2="-1253.788"
        y1="887.612"
        y2="888.2"
        gradientTransform="translate(1981.75 -1362.063) scale(1.5625)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-opacity=".3"></stop>
        <stop offset=".071" stop-opacity=".2"></stop>
        <stop offset=".321" stop-opacity=".1"></stop>
        <stop offset=".623" stop-opacity=".05"></stop>
        <stop offset="1" stop-opacity="0"></stop>
      </linearGradient>
      <path
        fill="url(#k8yl7~hDat~FaoWq8WjN6b_VLKafOkk3sBX_gr2)"
        d="M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"
      ></path>
      <linearGradient
        id="k8yl7~hDat~FaoWq8WjN6c_VLKafOkk3sBX_gr3"
        x1="-1252.952"
        x2="-1244.704"
        y1="876.6"
        y2="898.575"
        gradientTransform="translate(1981.75 -1362.063) scale(1.5625)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#3ccbf4"></stop>
        <stop offset="1" stop-color="#2892df"></stop>
      </linearGradient>
      <path
        fill="url(#k8yl7~hDat~FaoWq8WjN6c_VLKafOkk3sBX_gr3)"
        d="M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"
      ></path>
    </svg>
  );

  const checkLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <path
        fill="#4caf50"
        d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
      ></path>
      <path
        fill="#ccff90"
        d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"
      ></path>
    </svg>
  );

  const nodeJSLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
    >
      <path
        fill="#83cd29"
        d="M16 30a2.15 2.15 0 0 1-1.076-.288L11.5 27.685c-.511-.286-.262-.387-.093-.446a6.8 6.8 0 0 0 1.549-.7a.26.26 0 0 1 .255.019l2.631 1.563a.34.34 0 0 0 .318 0l10.26-5.922a.32.32 0 0 0 .157-.278V10.075a.33.33 0 0 0-.159-.283l-10.26-5.917a.32.32 0 0 0-.317 0L5.587 9.794a.33.33 0 0 0-.162.281v11.841a.32.32 0 0 0 .161.274L8.4 23.814c1.525.762 2.459-.136 2.459-1.038V11.085a.3.3 0 0 1 .3-.3h1.3a.3.3 0 0 1 .3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.4 4.4 0 0 1-2.363-.642l-2.697-1.547a2.17 2.17 0 0 1-1.076-1.872V10.075A2.16 2.16 0 0 1 4.661 8.2l10.261-5.924a2.25 2.25 0 0 1 2.156 0L27.338 8.2a2.17 2.17 0 0 1 1.077 1.87v11.846a2.17 2.17 0 0 1-1.077 1.872l-10.26 5.924A2.15 2.15 0 0 1 16 30"
      />
      <path
        fill="#83cd29"
        d="M14.054 17.953a.3.3 0 0 1 .3-.3h1.327a.3.3 0 0 1 .295.251c.2 1.351.8 2.032 3.513 2.032c2.161 0 3.082-.489 3.082-1.636c0-.661-.261-1.152-3.62-1.481c-2.808-.278-4.544-.9-4.544-3.144c0-2.07 1.745-3.305 4.67-3.305c3.287 0 4.914 1.141 5.12 3.589a.3.3 0 0 1-.295.323h-1.336a.3.3 0 0 1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875c-2.36 0-2.634.822-2.634 1.438c0 .746.324.964 3.51 1.385c3.153.417 4.651 1.007 4.651 3.223c0 2.236-1.864 3.516-5.115 3.516c-4.495.006-5.436-2.055-5.436-3.784"
      />
    </svg>
  );

  const viteLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="oOTIjsOjTqJdvfy5S4iCZa_dJjTWMogzFzg_gr1"
        x1="13.315"
        x2="38.005"
        y1="514.906"
        y2="481.377"
        gradientTransform="matrix(1 0 0 -1 0 514)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#41d1ff"></stop>
        <stop offset="1" stop-color="#9231be"></stop>
      </linearGradient>
      <path
        fill="url(#oOTIjsOjTqJdvfy5S4iCZa_dJjTWMogzFzg_gr1)"
        d="M44.86,9.976L25.023,45.448c-0.41,0.732-1.462,0.737-1.878,0.008L2.915,9.979 C2.462,9.185,3.141,8.223,4.041,8.384l19.859,3.55c0.127,0.023,0.256,0.022,0.383-0.001l19.443-3.544 C44.623,8.225,45.305,9.18,44.86,9.976z"
      ></path>
      <linearGradient
        id="oOTIjsOjTqJdvfy5S4iCZb_dJjTWMogzFzg_gr2"
        x1="25.502"
        x2="37.131"
        y1="508.764"
        y2="428.99"
        gradientTransform="matrix(1 0 0 -1 0 514)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fed100"></stop>
        <stop offset="1" stop-color="#e36001"></stop>
      </linearGradient>
      <path
        fill="url(#oOTIjsOjTqJdvfy5S4iCZb_dJjTWMogzFzg_gr2)"
        d="M33.574,3.01L19.019,5.862c-0.239,0.047-0.416,0.25-0.431,0.493l-0.895,15.121 c-0.021,0.356,0.306,0.633,0.654,0.552l4.052-0.935c0.379-0.087,0.722,0.246,0.644,0.628l-1.204,5.895 c-0.081,0.397,0.291,0.736,0.679,0.618l2.503-0.76c0.388-0.118,0.761,0.222,0.679,0.62l-1.913,9.26 c-0.12,0.579,0.651,0.895,0.972,0.398l0.215-0.332l11.86-23.669c0.199-0.396-0.144-0.848-0.579-0.764l-4.171,0.805 c-0.392,0.076-0.725-0.289-0.615-0.673l2.722-9.438C34.301,3.299,33.967,2.933,33.574,3.01z"
      ></path>
    </svg>
  );

  const esLintLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <path
        fill="#7986cb"
        d="M15.337,18.757l8.334-4.811c0.204-0.118,0.455-0.118,0.659,0l8.341,4.816	C32.874,18.879,33,19.097,33,19.332v9.632c0,0.235-0.126,0.453-0.329,0.57l-8.341,4.816c-0.204,0.118-0.455,0.118-0.659,0	l-8.341-4.816C15.126,29.417,15,29.199,15,28.964v-9.623C15,19.1,15.129,18.878,15.337,18.757"
      ></path>
      <path
        fill="#3949ab"
        d="M45.362,23.151L35.545,6.073C35.189,5.455,34.53,5,33.817,5H14.183c-0.713,0-1.372,0.455-1.729,1.073	L2.638,23.114c-0.357,0.618-0.357,1.397,0,2.015l9.817,16.938C12.811,42.684,13.47,43,14.183,43h19.634	c0.713,0,1.372-0.306,1.728-0.924l9.817-16.966C45.719,24.493,45.719,23.769,45.362,23.151 M36.66,31.821L24.356,38.92	c-0.217,0.125-0.484,0.125-0.701,0L11.34,31.821C11.13,31.699,11,31.475,11,31.232V17.063c0-0.243,0.13-0.468,0.341-0.59	l12.302-7.098c0.217-0.125,0.484-0.125,0.701,0l12.289,7.084C36.86,16.591,37,16.833,37,17.096v14.136	C37,31.475,36.87,31.7,36.66,31.821z"
      ></path>
    </svg>
  );

  const getTechLogo = () => {
    switch (tech) {
      case "JSON":
        return jsonLogo;
      case "Build Essentials":
        return gccLogo;
      case "check":
        return checkLogo;
      case "Node.js":
        return nodeJSLogo;
      case "Vite":
        return viteLogo;
      case "ESLint":
        return esLintLogo;
      case "Azure":
        return azureLogo;
      default:
        return null;
    }
  };
  return getTechLogo();
};

export default TechLogos;
